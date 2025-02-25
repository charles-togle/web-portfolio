const spotlight = document.getElementById("spotlight");
const projects = {
  proj1: `<img src="Dependencies/CateringManagement.png" alt="">
  <p>
    3M’s Catering Management System is designed to lessen planning time
    and scheduling for appointments, this system is programmed using HTML,
    CSS, JavaScript, PHP and MySQL for data handling
  </p>`,
  proj2: `<img src="Dependencies/AirplaneTicketingCSharp.png" alt="" />
  <p>
    Airplane Ticketing System that my team created during our Object
    Oriented Programming 2 programmed using C#, and MySQL for data
    handling
  </p>`,
  proj3: `<img src="Dependencies/CashDenomination.png" alt="" />
  <p>
    This system is designed to determine the exact denominations of change
    based on the available cash in the register. It is programmed in
    Python.
  </p>`,
  proj4: `<img src="Dependencies/AirplaneTicketingReact.png" alt="" />
  <p>
    Migrated the Airplane Ticketing System to a different tech stack,
    ReactJS, MySQL, ExpressJS, and NodeJS was used. This is still a work
    in progress
  </p>`,
  proj5: `<img src="Dependencies/PitogoAppointment.png" alt="" />
  <p>
    Belonged to the team that created the Pitogo Virtual Appointment System in which users will be able to get paper works done online. This system is programmed using HTML, CSS, JavaScript, and Google API for Google Sheets 
  </p>`,
};

let currentSpotlight = 3;
const eventListeners = document.querySelectorAll(".img-eventlistener");
const changeSpotlight = (e, source) => {
  const parentDiv = e.target.closest(".img-eventlistener");

  const eventlistenerClass = Array.from(parentDiv.classList).find(
    (className) => className.includes("content")
  );

  const contentNumber = eventlistenerClass.substring(7);
  const toAdd = Math.abs(currentSpotlight - parseInt(contentNumber));
  console.log(contentNumber);

  eventListeners.forEach((eventListener) => {
    const currentEventlistener = parseInt(eventListener.classList[2].substring(7));
    const addedContentNumber = currentEventlistener + toAdd;
    const finalContentNumber = addedContentNumber % 5;

    eventListener.classList.remove("content" + currentEventlistener);
    if (currentEventlistener == 5) {
      eventListener.classList.add("content1" );
    } else if (currentEventlistener == 1) {
      eventListener.classList.add("content5");
    } else {
      eventListener.classList.add(
        "content" + (finalAddNumber)
      );
    }
  });

  spotlight.innerHTML = projects[source];
  spotlight.classList.forEach((className) => {
    spotlight.classList.remove(className);
  });
  spotlight.classList.add(source);
};

const navigation = document.querySelector("aside");
const ShowNavigation = () => {
  navigation.classList.toggle("show");
};

document.addEventListener("click", (e) => {
  const header = document.querySelector("header");
  const aside = document.querySelector("aside");

  if (!header.contains(e.target) && !aside.contains(e.target)) {
    aside.classList.remove("show");
  }
});

const asideLinks = document.querySelectorAll("aside a");

asideLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navigation.classList.remove("show");
  });
});