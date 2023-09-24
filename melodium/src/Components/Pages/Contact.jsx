import React from "react";
import "./Contact.css"
function FormContact() {
    const emailAddress = 'studio@sjec.ac.in';
    return (
        <div className="contactcontainer">
            <div className="contactext">
                <h1 className="contact">CONTACT US</h1>
            </div>
            <div className="location">
                <svg xmlns="http://www.w3.org/2000/svg" width="84" height="84" viewBox="0 0 84 84" fill="none">
                    <path d="M42 7.875C28.957 7.875 18.375 17.9468 18.375 30.3516C18.375 44.625 34.125 67.2443 39.9082 75.057C40.1483 75.3867 40.4629 75.6551 40.8264 75.8401C41.19 76.0252 41.5921 76.1216 42 76.1216C42.4079 76.1216 42.81 76.0252 43.1736 75.8401C43.5371 75.6551 43.8517 75.3867 44.0918 75.057C49.875 67.2476 65.625 44.6365 65.625 30.3516C65.625 17.9468 55.043 7.875 42 7.875Z" stroke="#F5BC25" stroke-width="7.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M42 39.375C46.3492 39.375 49.875 35.8492 49.875 31.5C49.875 27.1508 46.3492 23.625 42 23.625C37.6508 23.625 34.125 27.1508 34.125 31.5C34.125 35.8492 37.6508 39.375 42 39.375Z" stroke="#F5BC25" stroke-width="7.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </div>
            <div className="locationtext">
                <h1 className="locatext">
                    <a href="https://www.google.com/maps/place/Melodium+-+The+SJEC+Studio/@12.9086419,74.897823,17.04z/data=!4m14!1m7!3m6!1s0x3ba3591f8df9296d:0x4e7792c4299eb7dd!2sMelodium+-+The+SJEC+Studio!8m2!3d12.9103342!4d74.8993807!16s%2Fg%2F11qbkrwww0!3m5!1s0x3ba3591f8df9296d:0x4e7792c4299eb7dd!8m2!3d12.9103342!4d74.8993807!16s%2Fg%2F11qbkrwww0?entry=ttu">
                        LOCATION
                    </a>
                </h1>
            </div>
            <div className="locsubtext">
                <h1>
                <a href="https://www.google.com/maps/place/Melodium+-+The+SJEC+Studio/@12.9086419,74.897823,17.04z/data=!4m14!1m7!3m6!1s0x3ba3591f8df9296d:0x4e7792c4299eb7dd!2sMelodium+-+The+SJEC+Studio!8m2!3d12.9103342!4d74.8993807!16s%2Fg%2F11qbkrwww0!3m5!1s0x3ba3591f8df9296d:0x4e7792c4299eb7dd!8m2!3d12.9103342!4d74.8993807!16s%2Fg%2F11qbkrwww0?entry=ttu">
                    Academic Block - 3, Ground Floor,  St. Joseph Engineering College, Mangaluru, Karnataka, 575028
                </a>    
                </h1>
            </div>
            <div className="callcontainer">
                <svg xmlns="http://www.w3.org/2000/svg" width="84" height="84" viewBox="0 0 84 84" fill="none">
                    <path d="M73.9922 61.3594C71.3868 58.7344 65.077 54.9036 62.0156 53.3597C58.0289 51.3516 57.7007 51.1875 54.5672 53.5156C52.477 55.0693 51.0874 56.4572 48.6412 55.9355C46.195 55.4138 40.8794 52.4721 36.225 47.8325C31.5705 43.1928 28.4582 37.7229 27.9349 35.285C27.4115 32.847 28.8225 31.4738 30.3614 29.3787C32.5303 26.4256 32.3662 25.9334 30.5123 21.9467C29.0669 18.8459 25.1245 12.5951 22.4897 10.0029C19.6711 7.21878 19.6711 7.71097 17.8549 8.46566C16.3763 9.08777 14.9578 9.84397 13.6172 10.7248C10.9922 12.4688 9.53528 13.9175 8.51645 16.0946C7.49762 18.2717 7.03988 23.3757 12.3014 32.9339C17.5629 42.4922 21.2543 47.3797 28.8946 54.9987C36.535 62.6178 42.4101 66.7144 50.9988 71.5313C61.6235 77.4818 65.6988 76.3219 67.8825 75.3047C70.0661 74.2875 71.5214 72.8438 73.2686 70.2188C74.1517 68.8804 74.9096 67.4635 75.5327 65.986C76.289 64.1764 76.7812 64.1764 73.9922 61.3594Z" stroke="#F5BC25" stroke-width="5.25" stroke-miterlimit="10"/>
                </svg>
            </div>
            <div className="calltext">
                <h1 className="call">CALL US</h1>
            </div>
            <div className="phoneno">
                <h1>+91 1234567890, +91 1234567890</h1>
            </div>
            <div className="emailimg">
                <svg xmlns="http://www.w3.org/2000/svg" width="84" height="84" viewBox="0 0 84 84" fill="none">
                    <path d="M66.5 14H17.5C14.7152 14 12.0445 15.1062 10.0754 17.0754C8.10625 19.0445 7 21.7152 7 24.5V59.5C7 62.2848 8.10625 64.9555 10.0754 66.9246C12.0445 68.8938 14.7152 70 17.5 70H66.5C69.2848 70 71.9555 68.8938 73.9246 66.9246C75.8938 64.9555 77 62.2848 77 59.5V24.5C77 21.7152 75.8938 19.0445 73.9246 17.0754C71.9555 15.1062 69.2848 14 66.5 14ZM64.155 21L42 37.625L19.845 21H64.155ZM66.5 63H17.5C16.5717 63 15.6815 62.6313 15.0251 61.9749C14.3687 61.3185 14 60.4283 14 59.5V25.375L39.9 44.8C40.5058 45.2544 41.2427 45.5 42 45.5C42.7573 45.5 43.4942 45.2544 44.1 44.8L70 25.375V59.5C70 60.4283 69.6313 61.3185 68.9749 61.9749C68.3185 62.6313 67.4283 63 66.5 63Z" fill="#F5BC25"/>
                </svg>
            </div>
            <div className="emailtext">
                <h1 className="email">
                        EMAIL
                </h1>
            </div>
            <div className="emailid">
                <a href={`mailto:${emailAddress}`} className="locatext">{emailAddress}</a>
            </div>
            <div className="rectangleconatct">
                <div className="form-container">
                    <div className="msgcontainer">
                    <h1>Send  us a Message</h1>
                    </div>
                    <form className="form">
                    <div className="form-group">
                        <label for="name">Enter your name</label>
                        <input type="text" id="name" name="name" required="" />
                        </div>
                        <div className="form-group">
                        <label for="email">Enter your email</label>
                        <input type="text" id="email" name="email" required="" />
                        </div>
                        <div className="form-group">
                        <label for="textarea">Type your Message</label>
                        <textarea name="textarea" id="textarea" rows="10" cols="50" required=""></textarea>
                        </div>
                        <button className="form-submit-btn" type="submit">Submit</button>
                    </form>
                    </div>
                </div>
                <div className="lastrectangle"></div>
            </div>
    )
}

export default FormContact;