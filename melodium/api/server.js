const express = require('express');
const mongoose = require('mongoose');
const ImageKit = require('imagekit');
const cors = require('cors');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');



const app = express();

app.use(express.json());
app.use(cors());

mongoose.connect("mongodb://127.0.0.1:27017/MelodiumTest", {
    useNewURLParser: true,
    useUnifiedTopology: true,
})
.then(()=>console.log("Connected to DB")).catch(console.error);


const Booking = require('./models/bookingTable');
const User = require('./models/UserCollection');
const ReviewSchema = require('./models/ReviewCollection');
const VideoMediaSchema = require('./models/videoTable');

app.get('/authenticate', (req, res) => {
  const token = generateAuthenticationToken();
  res.json(token);
});

app.post('/VideoAdded',async(req,res)=>
{
      const vid = new VideoMediaSchema({
        videoID : req.body.videoID,
        videoURL : req.body.videoURL,
      });

      vid.save();

      res.json(vid);
})
app.get('/GetVideo/:videoo', async (req, res) => {
  try {
    const vidid = req.params.videoo;
    const playingVideo = await VideoMediaSchema.findOne({ videoID: vidid });

    if (!playingVideo) {
      return res.status(404).json({ message: 'Video not found for the given vidid' });
    }

    const videoURL = playingVideo.videoURL;

    res.json({ videoURL });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ message: 'An error occurred while retrieving the video' });
  }
});

app.post('/UpdateVideoUrl', async (req, res) => {
  try {
    const { vidid, newVideoUrl } = req.body;

    // Find the video by vidid and update its videoURL
    const updatedVideo = await VideoMediaSchema.findOneAndUpdate(
      { videoID: vidid },
      { $set: { videoURL: newVideoUrl } },
      { new: true }
    );

    if (!updatedVideo) {
      return res.status(404).json({ message: 'Video not found for the given vidid' });
    }

    res.json({ message: 'Video URL updated successfully', updatedVideo });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ message: 'An error occurred while updating the video URL' });
  }
});


app.get('/BookingDisplay', async (req, res) => {
    const bookings = await Booking.find().sort({ DateBooked: -1 }); // Sort by DateBooked field in descending order

    res.json(bookings);
});

app.get('/BookingInfo/:firstname/:lastname', async (req, res) => {
    const targetFirstName = req.params.firstname;
    const targetLastName = req.params.lastname;

    Booking.find({
    $and: [
        { FirstName: { $regex: targetFirstName, $options: 'i' } },
        { LastName: { $regex: targetLastName, $options: 'i' } }
    ]
    })
    .then(bookings => {
        if (bookings.length > 0) {
            // Bookings with the given first name and last name were found
            res.json(bookings);
        } else {
            // No bookings found with the given first name and last name
            res.status(404).json({ message: 'No bookings found with the given first name and last name' });
        }
    })
    .catch(error => {
        console.error('Error:', error);
        res.status(500).json({ message: 'An error occurred' });
    });
});
app.get('/RetrieveBookingID/:bookingID',async (req,res)=>
{
  ID = req.params.bookingID;
  const bookings = await Booking.find({BookingID:ID})
  res.json(bookings)
})
app.get('/BookingTimeSlots/:Date/:All/:Type', async (req, res) => {
    const targetDate = req.params.Date;
    const typeOfReturn = req.params.All;
    const typeOfRoom = req.params.Type;
    console.log(typeOfRoom)
    var bookings
    if(typeOfReturn==1)
    {
      try {
        if(typeOfRoom=='Jam Room')
        {
          console.log("Inside Jam")
          bookings = await Booking.find({ BookingDate: targetDate, TypeOfSession: typeOfRoom });
        }
        else
        if(typeOfRoom=='All')
        {
          bookings = await Booking.find({ BookingDate: targetDate});
        }
        else
        {
          console.log("Inside else,"+targetDate)
          bookings = await Booking.find({ BookingDate: targetDate, TypeOfSession: { $ne: 'Jam Room' } });
        }
        const allTimeSlots = bookings.flatMap(booking => booking.TimeSlots);
        res.json(allTimeSlots);
      } catch (error) {
        console.error('Error fetching first names:', error);
        res.status(500).send('Error fetching first names');
      }
    }
    else
    {
      console.log(typeOfRoom)
      if(typeOfRoom =='Jam Room')
      {
        const bookings = await Booking.find({TypeOfSession: 'Jam Room'})
        res.json(bookings)
      }
      else
      if(typeOfRoom == 'Studio')
      {
        bookings = await Booking.find({ TypeOfSession: { $ne: 'Jam Room' } });
        res.json(bookings)
      }
      else
      {
        try {
          const bookings = await Booking.find({ BookingDate: targetDate });
          res.json(bookings);
      }
      catch (error) {
        console.error('Error fetching first names:', error);
        res.status(500).send('Error fetching first names');
      }
      }
    }
   
  });

  app.get('/CheckUser/:userid', async (req, res) => {
    try {

      const userid = req.params.userid; 
      console.log('id rec:'+userid)
  
      if (!userid) {
        return res.status(400).json({ error: 'Invalid input data' });
      }
  
      // Check if the user exists
      const user = await User.findOne({ UserID: userid });
  
      if (user) {
        // User found, respond with user data
        res.status(200).json(user);
      } else {
        // User not found
        res.status(404).json({ error: 'User not found' });
      }
    } catch (error) {
      console.error('Error:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });
  
  

app.post('/BookingAdded',async(req,res)=>
{
    const bookings = new Booking({
        BookingID : req.body.BookingID,
        FirstName : req.body.FirstName,
        LastName : req.body.LastName,
        EmailAddress : req.body.EmailAddress,
        ContactNumber : req.body.ContactNumber,
        TimeSlots : req.body.TimeSlots,
        TypeOfSession : req.body.TypeOfSession,
        PaymentStatus: req.body.PaymentStatus,
        BookingDate: req.body.BookingDate
    });

    bookings.save();

    res.json(bookings);
});

app.post('/UserAdded', async (req, res) => {
  try {
    const { userid, pass } = req.body;

    // Check if the user already exists
    const existingUser = await User.findOne({ UserID: userid });

    if (existingUser) {
      return res.status(400).json({ error: 'User already exists' });
    }

    const user = new User({
      UserID: userid,
      Password: pass
    });

    await user.save();

    res.status(201).json({ message: 'User added successfully', user });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.post('/ReviewAdded', async (req, res) => {
  try {
    const { revID, Name, Rate,Rev } = req.body;

    const newReview = new ReviewSchema({
      reviewID: revID,
      PersonName: Name,
      Rating: Rate,
      Review: Rev
    });

    await newReview.save();

    res.status(201).json({ message: 'Review added successfully', newReview });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.get('/getReviews',async(req,res) => 
{
  const rev = await ReviewSchema.find();
  res.json(rev)
})

app.get('/updateReviews',async(req,res) => 
{
  const rev = await ReviewSchema.find();
  res.json(rev)
})

app.delete('/DeleteReviews', async (req, res) => {
  try {
    // Use the deleteMany() method to delete all documents in the ReviewSchema collection
    const result = await ReviewSchema.deleteMany({});
    
    // Check if any documents were deleted
    if (result.deletedCount > 0) {
      res.status(200).json({ message: 'All reviews deleted successfully.' });
    } else {
      res.status(404).json({ message: 'No reviews found to delete.' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Internal server error', error: error.message });
  }
});



app.delete('/DeleteBooking/:bookingID', async (req, res) => {
  const bookingID = req.params.bookingID;

  try {
    const deletedBooking = await Booking.findOneAndDelete({ BookingID: bookingID });

    if (deletedBooking) {
      res.status(200).json({ message: 'Booking deleted successfully' });
    } else {
      res.status(404).json({ error: 'Booking not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while deleting the booking' });
  }
});

app.put('/UpdateBooking', async (req, res) => {
  const updatedBookingData = req.body;
  const bookingID = updatedBookingData.BookingID; // Ensure the key name matches your data structure
  console.log("ID: "+updatedBookingData.BookingID)
  try {
    const updatedBooking = await Booking.findOneAndUpdate(
      { BookingID: bookingID },
      { $set: updatedBookingData },
      { new: true }

    );

    if (updatedBooking) {
      const verify = await Booking.find({ BookingID: bookingID });
      res.json({ message: 'Booking updated successfully', updatedBooking });
    } else {
      const verify = await Booking.find({ BookingID: bookingID });
      console.log(verify)
      res.status(404).json({ error: 'Booking not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while updating the booking' });
  }
});




app.delete('/DeleteCollection', (req, res) => {
    Booking.collection.drop((err) => {
      if (err && err.message !== 'ns not found') {
        console.error('Error dropping collection:', err);
        res.status(500).send('Error dropping collection');
        return;
      }
  
      res.send('Collection has been dropped.');
    });
  });
  app.use(bodyParser.json());
  
  app.post('/sendEmail', async (req, res) => {
    try {
      const { recipientEmail } = req.body;
      const transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com', 
        port: 587, 
        secure: false, 
        auth: {
          user: '20cs086.melroy@sjec.ac.in',
          pass: '727E83FBCD!',
        },
      });
      await transporter.sendMail({
        from: '20cs086.melroy@sjec.ac.in',
        to: recipientEmail,
        subject: 'Booking Confirmation',
        html: '<h1>Your booking has been confirmed!</h1>',
      });
  
      res.status(200).send('Email sent successfully.');
    } catch (error) {
      console.error('Error sending email:', error);
      res.status(500).send('Error sending email.');
    }
  });

  app.post('/uploadImage', async (req, res) => {
    
  });
  
  
  
  
  app.listen(3002, () => {
    console.log('Server started on port 3002');
  });

app.listen(3001, ()=> console.log("Server started on port 3001"));
