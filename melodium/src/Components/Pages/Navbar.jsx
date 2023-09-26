import React,{useEffect,useState} from "react";
<<<<<<< HEAD
=======
// import { PiSlidersBold } from "react-icons/pi";
>>>>>>> dcd6d8420608bf4edbce6843be370d903bb30281
import "./Navbar.css"
import logo from '../Pages/Images/logo.png';

const Navbar = () => {
    const [isMobile, setIsMobile] = useState(false);

    const checkIfMobile = () => {
        setIsMobile(window.innerWidth <= 767);
    };

    useEffect(() => {
        checkIfMobile();

        const handleResize = () => {
        checkIfMobile();
        };

        window.addEventListener('resize', handleResize);

        return () => {
        window.removeEventListener('resize', handleResize);
        };
      }, []);
    let HandleClick = (type) => {

        let scrollToPosition = 0;
        if (type === "Home") {
            // Calculate the pixel value equivalent to 310vh
            scrollToPosition = 0;
          }
        
        if (type === "Facilities") {
          // Calculate the pixel value equivalent to 310vh
          scrollToPosition = (window.innerHeight * 410) / 100;
        }
        if (type === "Services") {
            // Calculate the pixel value equivalent to 310vh
            scrollToPosition = (window.innerHeight * 510) / 100;
          }
          if (type === "Booking") {
            // Calculate the pixel value equivalent to 310vh
            scrollToPosition = (window.innerHeight * 682) / 100;
          }
          if (type === "Gallery") {
            // Calculate the pixel value equivalent to 310vh
            scrollToPosition = (window.innerHeight * 792) / 100;
          }
          if (type === "Contact") {
            // Calculate the pixel value equivalent to 310vh
            scrollToPosition = (window.innerHeight * 1030) / 100;
          }
        console.log(scrollToPosition)
        window.scrollTo({
          top: scrollToPosition,
          behavior: 'auto',
        });
      }
      const [scrolling, setScrolling] = useState(false);

  // Function to handle scroll event
  const handleScroll = () => {
    if (window.scrollY > 0) {
      setScrolling(true); // User has scrolled, update the state
    } else {
      setScrolling(false); // User is at the top of the page
    }
  };
      useEffect(() => {
        window.addEventListener("scroll", handleScroll);
    
        // Remove the event listener when the component unmounts
        return () => {
          window.removeEventListener("scroll", handleScroll);
        };
      }, []);

    const menuClassName = isMobile ? "mobile-menu" : "";

    return (
        <>
        <nav className={`naviagtion ${scrolling ? "scrolling" : ""} ${menuClassName}`}>
            {/* <div className="mobilemenuicon">
                <PiSlidersBold size="2rem"/>
            </div> */}
            <img id="navbar-logo" src={logo}/>
            <div className="menu-link">
                <ul>
                    <li>
                        <div onClick={()=>HandleClick("Home")}>
                            <a>HOME</a>
                        </div>
                    </li>

                    <li>
                        <div onClick={()=>HandleClick("Facilities")}>
                            <a>FACILITES</a>
                        </div>
                    </li>
                    <li>
                        <div onClick={()=>HandleClick("Services")}>
                            <a>SERVICES</a>
                        </div>
                    </li>
                    <li>
                        <div onClick={()=>HandleClick("Booking")}>
                            <a>BOOKING</a>
                        </div>
                    </li>
                    <li>
                        <div onClick={()=>HandleClick("Gallery")}>
                            <a>GALLERY</a>
                        </div>
                    </li>
                    <li>
                        <div onClick={()=>HandleClick("Contact")}>
                            <a>CONTACT</a>
                        </div>
                    </li>
                </ul>
            </div>

            <div className="media">
                <ul className="socialmediaDesktop">
                    <li>
                        <svg className="insta" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" >
                            <path d="M9.67362 2.87265H19.8607C23.7416 2.87265 26.8947 6.0258 26.8947 9.90659V20.0937C26.8947 21.9592 26.1536 23.7483 24.8345 25.0674C23.5154 26.3866 21.7263 27.1276 19.8607 27.1276H9.67362C5.79281 27.1276 2.63965 23.9745 2.63965 20.0937V9.90659C2.63965 8.04108 3.38073 6.25196 4.69985 4.93284C6.01897 3.61372 7.80809 2.87265 9.67362 2.87265ZM9.43106 5.29815C8.27315 5.29815 7.16267 5.75812 6.3439 6.57689C5.52513 7.39565 5.06515 8.50614 5.06515 9.66404V20.3362C5.06515 22.7496 7.01769 24.7021 9.43106 24.7021H20.1033C21.2612 24.7021 22.3717 24.2422 23.1905 23.4234C24.0092 22.6046 24.4692 21.4941 24.4692 20.3362V9.66404C24.4692 7.25067 22.5167 5.29815 20.1033 5.29815H9.43106ZM21.1341 7.11727C21.5362 7.11727 21.9218 7.27699 22.2061 7.56128C22.4904 7.84557 22.6501 8.23116 22.6501 8.63321C22.6501 9.03526 22.4904 9.42084 22.2061 9.70514C21.9218 9.98943 21.5362 10.1491 21.1341 10.1491C20.7321 10.1491 20.3465 9.98943 20.0622 9.70514C19.7779 9.42084 19.6182 9.03526 19.6182 8.63321C19.6182 8.23116 19.7779 7.84557 20.0622 7.56128C20.3465 7.27699 20.7321 7.11727 21.1341 7.11727ZM14.7672 8.93639C16.3754 8.93639 17.9177 9.57525 19.0549 10.7124C20.1921 11.8496 20.8309 13.3919 20.8309 15.0001C20.8309 16.6083 20.1921 18.1507 19.0549 19.2879C17.9177 20.425 16.3754 21.0639 14.7672 21.0639C13.159 21.0639 11.6166 20.425 10.4794 19.2879C9.34227 18.1507 8.70341 16.6083 8.70341 15.0001C8.70341 13.3919 9.34227 11.8496 10.4794 10.7124C11.6166 9.57525 13.159 8.93639 14.7672 8.93639ZM14.7672 11.3619C13.8023 11.3619 12.8768 11.7452 12.1945 12.4275C11.5122 13.1098 11.1289 14.0352 11.1289 15.0001C11.1289 15.9651 11.5122 16.8905 12.1945 17.5728C12.8768 18.2551 13.8023 18.6384 14.7672 18.6384C15.7321 18.6384 16.6575 18.2551 17.3398 17.5728C18.0221 16.8905 18.4054 15.9651 18.4054 15.0001C18.4054 14.0352 18.0221 13.1098 17.3398 12.4275C16.6575 11.7452 15.7321 11.3619 14.7672 11.3619Z" fill="#F8F8F8"/>
                        </svg>
                    </li>
                    <li>
                        <svg className="facebook" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" >
                        <path d="M27.1281 15.0001C27.1281 8.30573 21.695 2.87262 15.0006 2.87262C8.30618 2.87262 2.87305 8.30573 2.87305 15.0001C2.87305 20.8698 7.04492 25.7572 12.5751 26.885V18.6384H10.1496V15.0001H12.5751V11.9682C12.5751 9.62763 14.4791 7.72361 16.8197 7.72361H19.8516V11.3619H17.4261C16.7591 11.3619 16.2133 11.9076 16.2133 12.5746V15.0001H19.8516V18.6384H16.2133V27.067C22.3377 26.4606 27.1281 21.2943 27.1281 15.0001Z" fill="#F8F8F8"/>
                        </svg>
                    </li>
                    <li>
                    <svg className="sound" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" >
                    <g clip-path="url(#clip0_247_28)">
                        <path d="M13.3699 10.8735C13.6913 10.8735 13.9521 13.4276 13.9521 16.5783L13.9508 17.0027C13.9278 19.9558 13.6768 22.283 13.3699 22.283C13.0595 22.283 12.806 19.9 12.7878 16.8984V16.4703C12.7939 13.3693 13.0522 10.8735 13.3699 10.8735ZM11.3519 12.0377C11.666 12.0377 11.9219 14.2207 11.934 16.9542V17.3666C11.9219 20.0989 11.666 22.2818 11.3519 22.2818C11.0427 22.2818 10.7892 20.1535 10.7698 17.4672V17.0561L10.7722 16.6438C10.8025 14.057 11.0511 12.0377 11.3519 12.0377ZM9.33389 12.0377C9.64314 12.0377 9.89661 14.1661 9.91601 16.8524V17.2635L9.91359 17.6758C9.88327 20.2626 9.63465 22.283 9.33389 22.283C9.01979 22.283 8.7639 20.1001 8.75177 17.3653V16.953C8.7639 14.2207 9.01979 12.0377 9.33389 12.0377ZM7.31587 12.7351C7.63725 12.7351 7.89799 14.8731 7.89799 17.5097L7.89557 17.9159C7.87131 20.3621 7.62027 22.2818 7.31587 22.2818C6.99813 22.2818 6.74103 20.2008 6.73375 17.6115V17.4066C6.74103 14.8174 6.99813 12.7363 7.31587 12.7363V12.7351ZM5.29785 14.8319C5.61923 14.8319 5.87997 16.4994 5.87997 18.5563V18.7491C5.86421 20.7174 5.60953 22.283 5.29785 22.283C4.97647 22.283 4.71573 20.6143 4.71573 18.5575V18.3647C4.73149 16.3964 4.98617 14.8319 5.29785 14.8319ZM18.3762 9.01072C21.5051 9.01072 24.1004 11.2968 24.583 14.291C25.1402 14.1311 25.7251 14.092 26.2987 14.1761C26.8722 14.2603 27.4212 14.4659 27.909 14.7791C28.3967 15.0924 28.812 15.5061 29.1272 15.9926C29.4423 16.4792 29.65 17.0273 29.7364 17.6005C29.8228 18.1738 29.7858 18.7588 29.6281 19.3166C29.4704 19.8744 29.1954 20.3921 28.8216 20.8352C28.4479 21.2783 27.9839 21.6365 27.4606 21.886C26.9373 22.1355 26.3669 22.2704 25.7873 22.2818H15.8148C15.5678 22.2818 15.3309 22.1837 15.1562 22.009C14.9816 21.8344 14.8834 21.5975 14.8834 21.3504V10.0682C15.9168 9.37655 17.1327 9.00839 18.3762 9.01072ZM3.27983 14.5979C3.60121 14.5979 3.86195 16.2145 3.86195 18.2082V18.3962C3.84497 20.3014 3.59151 21.8161 3.27983 21.8161C2.96451 21.8161 2.7062 20.2517 2.69771 18.3028V18.207C2.69771 16.2144 2.95845 14.5979 3.27983 14.5979ZM1.26181 15.7621C1.58319 15.7621 1.84393 16.9094 1.84393 18.3246V18.4823C1.82453 19.8236 1.57106 20.8847 1.26181 20.8847C0.940429 20.8847 0.679688 19.7387 0.679688 18.3246V18.1658C0.699092 16.8245 0.952557 15.7621 1.26181 15.7621Z" fill="#F8F8F8"/>
                    </g>
                    <defs>
                        <clipPath id="clip0_247_28">
                        <rect width="29.1061" height="29.106" fill="white" transform="translate(0.680664 0.446899)"/>
                        </clipPath>
                    </defs>
                    </svg>
                    </li>
                </ul>
                {scrolling && (
                <svg id="navbar-arrow" xmlns="http://www.w3.org/2000/svg" width="35" height="18" viewBox="0 0 55 18" fill="none">
                <path d="M27.5 14.9237L51.4854 0.373707C51.6787 0.253914 51.9082 0.159209 52.1606 0.09507C52.413 0.030931 52.6833 -0.00136717 52.9558 4.4345e-05C53.2284 0.00145586 53.4978 0.0365481 53.7484 0.103292C53.999 0.170037 54.226 0.267107 54.416 0.388886C54.6061 0.510664 54.7556 0.654732 54.8557 0.812753C54.9559 0.970775 55.0048 1.13961 54.9996 1.3095C54.9944 1.47938 54.9353 1.64693 54.8255 1.80246C54.7158 1.95799 54.5576 2.09841 54.3603 2.21559L28.9374 17.636C28.5526 17.8694 28.0369 18 27.5 18C26.9631 18 26.4474 17.8694 26.0626 17.636L0.639736 2.21559C0.442365 2.09841 0.284234 1.95799 0.174487 1.80246C0.06474 1.64693 0.00556105 1.47938 0.000372833 1.3095C-0.00481538 1.13961 0.0440895 0.970775 0.14426 0.812753C0.244431 0.654732 0.393875 0.510664 0.583949 0.388886C0.774022 0.267107 1.00095 0.170037 1.2516 0.103292C1.50225 0.0365481 1.77164 0.00145586 2.04419 4.4345e-05C2.31673 -0.00136717 2.58702 0.030931 2.83941 0.09507C3.09181 0.159209 3.32129 0.253914 3.51458 0.373707L27.5 14.9237Z" fill="#F8F8F8" fill-opacity="0.7"/>
                </svg>
                )}
            </div>
        </nav>


        </>
    );
};

export default Navbar;
