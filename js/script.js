/* =========================================================
   HERITAGE INDIA
   DESTINATION DATABASE
   ========================================================= */


/* =========================================================
   MOBILE NAVIGATION
   ========================================================= */

function toggleMenu() {

    const menu = document.querySelector(".nav-links");

    if (menu) {

        menu.classList.toggle("show");

    }

}


/* =========================================================
   50 UNIQUE HISTORICAL DESTINATIONS
   ========================================================= */

const destinations = [

    {
        name: "Taj Mahal",
        location: "Agra, Uttar Pradesh",
        wiki: "Taj_Mahal",
        description:
            "The Taj Mahal is a magnificent white marble mausoleum built during the Mughal period and one of India's most famous symbols of love and architecture."
    },


    {
        name: "Agra Fort",
        location: "Agra, Uttar Pradesh",
        wiki: "Agra_Fort",
        description:
            "Agra Fort is a massive red sandstone fort that served as an important imperial residence of the Mughal rulers."
    },


    {
        name: "Fatehpur Sikri",
        location: "Uttar Pradesh",
        wiki: "Fatehpur_Sikri",
        description:
            "Fatehpur Sikri is a historic Mughal city known for its grand gateways, palaces, courtyards and architectural monuments."
    },


    {
        name: "Red Fort",
        location: "Delhi",
        wiki: "Red_Fort",
        description:
            "The Red Fort is a magnificent Mughal-era fortification and one of the most important historic landmarks of Delhi."
    },


    {
        name: "Qutb Minar",
        location: "Delhi",
        wiki: "Qutb_Minar",
        description:
            "Qutb Minar is a towering medieval minaret surrounded by an important archaeological complex in Delhi."
    },


    {
        name: "Humayun's Tomb",
        location: "Delhi",
        wiki: "Humayun%27s_Tomb",
        description:
            "Humayun's Tomb is an important Mughal garden tomb whose architecture influenced later Mughal monuments."
    },


    {
        name: "India Gate",
        location: "New Delhi",
        wiki: "India_Gate",
        description:
            "India Gate is a prominent memorial and landmark in New Delhi, built in memory of Indian soldiers who died in World War I."
    },


    {
        name: "Amer Fort",
        location: "Jaipur, Rajasthan",
        wiki: "Amer_Fort",
        description:
            "Amer Fort is a magnificent hilltop fort famous for its Rajput architecture, courtyards, palaces and artistic decoration."
    },


    {
        name: "Hawa Mahal",
        location: "Jaipur, Rajasthan",
        wiki: "Hawa_Mahal",
        description:
            "Hawa Mahal, or Palace of Winds, is one of Jaipur's most recognizable historic buildings, famous for its ornate facade."
    },


    {
        name: "City Palace",
        location: "Udaipur, Rajasthan",
        wiki: "City_Palace,_Udaipur",
        description:
            "Udaipur City Palace is a grand palace complex overlooking Lake Pichola and reflecting the heritage of the Mewar dynasty."
    },


    {
        name: "Mehrangarh Fort",
        location: "Jodhpur, Rajasthan",
        wiki: "Mehrangarh",
        description:
            "Mehrangarh Fort rises dramatically above Jodhpur and contains impressive palaces, courtyards and historic collections."
    },


    {
        name: "Jaisalmer Fort",
        location: "Jaisalmer, Rajasthan",
        wiki: "Jaisalmer_Fort",
        description:
            "Jaisalmer Fort is a spectacular golden sandstone fort and one of the world's notable living fortified cities."
    },


    {
        name: "Kumbhalgarh Fort",
        location: "Rajsamand, Rajasthan",
        wiki: "Kumbhalgarh",
        description:
            "Kumbhalgarh is a historic hill fort famous for its massive defensive walls and strategic location in the Aravalli hills."
    },


    {
        name: "Chittor Fort",
        location: "Chittorgarh, Rajasthan",
        wiki: "Chittor_Fort",
        description:
            "Chittor Fort is one of India's largest historic forts and an important symbol of the history of Mewar."
    },


    {
        name: "Ranakpur Jain Temple",
        location: "Ranakpur, Rajasthan",
        wiki: "Ranakpur_Jain_temple",
        description:
            "Ranakpur Jain Temple is celebrated for its detailed marble carvings, numerous pillars and extraordinary craftsmanship."
    },


    {
        name: "Ajanta Caves",
        location: "Maharashtra",
        wiki: "Ajanta_Caves",
        description:
            "Ajanta Caves are ancient rock-cut Buddhist caves famous for their paintings, sculptures and artistic heritage."
    },


    {
        name: "Ellora Caves",
        location: "Maharashtra",
        wiki: "Ellora_Caves",
        description:
            "Ellora Caves contain remarkable Buddhist, Hindu and Jain monuments carved into the rock."
    },


    {
        name: "Elephanta Caves",
        location: "Mumbai, Maharashtra",
        wiki: "Elephanta_Caves",
        description:
            "Elephanta Caves are historic rock-cut temples located on Elephanta Island near Mumbai."
    },


    {
        name: "Shaniwar Wada",
        location: "Pune, Maharashtra",
        wiki: "Shaniwar_Wada",
        description:
            "Shaniwar Wada was an important seat of the Peshwas and is closely connected with Maratha history."
    },


    {
        name: "Chhatrapati Shivaji Terminus",
        location: "Mumbai, Maharashtra",
        wiki: "Chhatrapati_Shivaji_Terminus",
        description:
            "Chhatrapati Shivaji Terminus is a grand historic railway station combining Victorian Gothic and Indian architectural traditions."
    },


    {
        name: "Gateway of India",
        location: "Mumbai, Maharashtra",
        wiki: "Gateway_of_India",
        description:
            "The Gateway of India is an iconic Mumbai landmark overlooking the Arabian Sea and reflecting the city's colonial-era history."
    },


    {
        name: "Daulatabad Fort",
        location: "Chhatrapati Sambhajinagar, Maharashtra",
        wiki: "Daulatabad,_Maharashtra",
        description:
            "Daulatabad Fort is a remarkable medieval hill fortress known for its strategic design and defensive architecture."
    },


    {
        name: "Bibi Ka Maqbara",
        location: "Chhatrapati Sambhajinagar, Maharashtra",
        wiki: "Bibi_Ka_Maqbara",
        description:
            "Bibi Ka Maqbara is a beautiful Mughal-inspired mausoleum known for its marble facade and landscaped surroundings."
    },


    {
        name: "Hampi",
        location: "Karnataka",
        wiki: "Hampi",
        description:
            "Hampi contains the spectacular ruins of the Vijayanagara Empire, including temples, markets, palaces and monumental structures."
    },


    {
        name: "Mysore Palace",
        location: "Mysuru, Karnataka",
        wiki: "Mysore_Palace",
        description:
            "Mysore Palace is a magnificent royal residence known for its Indo-Saracenic architecture and richly decorated interiors."
    },


    {
        name: "Pattadakal",
        location: "Karnataka",
        wiki: "Pattadakal",
        description:
            "Pattadakal is a historic temple complex showcasing remarkable early medieval Indian architectural styles."
    },


    {
        name: "Badami Cave Temples",
        location: "Badami, Karnataka",
        wiki: "Badami_cave_temples",
        description:
            "The Badami cave temples are rock-cut monuments carved into sandstone cliffs and associated with the Chalukyan architectural tradition."
    },


    {
        name: "Gol Gumbaz",
        location: "Vijayapura, Karnataka",
        wiki: "Gol_Gumbaz",
        description:
            "Gol Gumbaz is a monumental mausoleum famous for its enormous dome and remarkable acoustic gallery."
    },


    {
        name: "Konark Sun Temple",
        location: "Konark, Odisha",
        wiki: "Konark_Sun_Temple",
        description:
            "The Konark Sun Temple is a spectacular 13th-century temple designed as a monumental stone chariot dedicated to the Sun."
    },


    {
        name: "Jagannath Temple",
        location: "Puri, Odisha",
        wiki: "Jagannath_Temple,_Puri",
        description:
            "Jagannath Temple is one of Odisha's most important historic temple complexes and a major cultural landmark."
    },


    {
        name: "Sanchi Stupa",
        location: "Sanchi, Madhya Pradesh",
        wiki: "Sanchi",
        description:
            "Sanchi is home to some of India's oldest surviving Buddhist monuments, including the famous Great Stupa."
    },


    {
        name: "Khajuraho Temples",
        location: "Khajuraho, Madhya Pradesh",
        wiki: "Khajuraho_Group_of_Monuments",
        description:
            "The Khajuraho Group of Monuments is famous for its beautifully carved temples and sophisticated medieval architecture."
    },


    {
        name: "Gwalior Fort",
        location: "Gwalior, Madhya Pradesh",
        wiki: "Gwalior_Fort",
        description:
            "Gwalior Fort is a dramatic hilltop fortress containing palaces, temples and important historic structures."
    },


    {
        name: "Mandu",
        location: "Dhar, Madhya Pradesh",
        wiki: "Mandu,_Madhya_Pradesh",
        description:
            "Mandu is a historic city filled with palaces, mosques, gateways and monuments set among the hills of central India."
    },


    {
        name: "Victoria Memorial",
        location: "Kolkata, West Bengal",
        wiki: "Victoria_Memorial,_Kolkata",
        description:
            "Victoria Memorial is a grand marble monument and museum representing an important part of Kolkata's colonial-era history."
    },


    {
        name: "Nalanda Mahavihara",
        location: "Nalanda, Bihar",
        wiki: "Nalanda",
        description:
            "Nalanda was one of the ancient world's great centers of learning and an important archaeological heritage site."
    },


    {
        name: "Mahabodhi Temple",
        location: "Bodh Gaya, Bihar",
        wiki: "Mahabodhi_Temple",
        description:
            "Mahabodhi Temple is a major Buddhist pilgrimage monument associated with the enlightenment of Gautama Buddha."
    },


    {
        name: "Charminar",
        location: "Hyderabad, Telangana",
        wiki: "Charminar",
        description:
            "Charminar is the iconic four-minaret monument that has become one of Hyderabad's most recognizable historic landmarks."
    },


    {
        name: "Golconda Fort",
        location: "Hyderabad, Telangana",
        wiki: "Golconda",
        description:
            "Golconda Fort is a massive historic fortress known for its impressive defensive system and acoustic engineering."
    },


    {
        name: "Bidar Fort",
        location: "Bidar, Karnataka",
        wiki: "Bidar_Fort",
        description:
            "Bidar Fort is an important medieval fortification representing the architectural heritage of the Deccan."
    },


    {
        name: "Vellore Fort",
        location: "Vellore, Tamil Nadu",
        wiki: "Vellore_Fort",
        description:
            "Vellore Fort is a massive granite fortress known for its walls, moat and historic temple."
    },


    {
        name: "Brihadisvara Temple",
        location: "Thanjavur, Tamil Nadu",
        wiki: "Brihadisvara_Temple",
        description:
            "Brihadisvara Temple is a magnificent Chola-era temple celebrated for its monumental scale and Dravidian architecture."
    },


    {
        name: "Shore Temple",
        location: "Mahabalipuram, Tamil Nadu",
        wiki: "Shore_Temple",
        description:
            "The Shore Temple is an iconic Pallava monument located beside the Bay of Bengal at Mahabalipuram."
    },


    {
        name: "Meenakshi Temple",
        location: "Madurai, Tamil Nadu",
        wiki: "Meenakshi_Temple",
        description:
            "Meenakshi Temple is a spectacular historic temple complex famous for its towering gopurams and intricate sculptures."
    },


    {
        name: "Ranganathaswamy Temple",
        location: "Srirangam, Tamil Nadu",
        wiki: "Ranganathaswamy_Temple,_Srirangam",
        description:
            "The Ranganathaswamy Temple is a vast historic temple complex renowned for its Dravidian architecture and monumental gateways."
    },


    {
        name: "Rajgad Fort",
        location: "Pune, Maharashtra",
        wiki: "Rajgad",
        description:
            "Rajgad is a historic hill fort associated with the early administration and expansion of the Maratha kingdom."
    },


    {
        name: "Pratapgad Fort",
        location: "Satara, Maharashtra",
        wiki: "Pratapgad",
        description:
            "Pratapgad is a historic mountain fort surrounded by the landscapes of the Western Ghats and closely associated with Maratha history."
    },


    {
        name: "Sinhagad Fort",
        location: "Pune, Maharashtra",
        wiki: "Sinhagad",
        description:
            "Sinhagad is a historic hill fort near Pune with strong connections to the history of the Maratha Empire."
    },


    {
        name: "Rani ki Vav",
        location: "Patan, Gujarat",
        wiki: "Rani_ki_vav",
        description:
            "Rani ki Vav is an extraordinary stepwell known for its elaborate sculptures and sophisticated architectural design."
    },


    {
        name: "Champaner-Pavagadh Archaeological Park",
        location: "Gujarat",
        wiki: "Champaner-Pavagadh_Archaeological_Park",
        description:
            "Champaner-Pavagadh contains forts, temples, mosques and archaeological remains representing centuries of history."
    },


    {
        name: "Dholavira",
        location: "Gujarat",
        wiki: "Dholavira",
        description:
            "Dholavira is an important Harappan archaeological site revealing sophisticated ancient urban planning and water management."
    },


    {
        name: "Bara Imambara",
        location: "Lucknow, Uttar Pradesh",
        wiki: "Bara_Imambara",
        description:
            "Bara Imambara is a remarkable historic complex famous for its enormous central hall and architectural labyrinth."
    },


    {
        name: "Lalbagh Palace",
        location: "Indore, Madhya Pradesh",
        wiki: "Lal_Bagh_Palace",
        description:
            "Lal Bagh Palace is a grand historic palace reflecting European architectural influences and the royal heritage of Indore."
    }

];


/* =========================================================
   WIKIPEDIA IMAGE FUNCTION
   ========================================================= */

async function getWikipediaImage(wikiTitle) {

    try {

        const url =
            "https://en.wikipedia.org/api/rest_v1/page/summary/"
            + wikiTitle;

        const response =
            await fetch(url);


        if (!response.ok) {

            throw new Error(
                "Wikipedia page not found"
            );

        }


        const data =
            await response.json();


        if (
            data.thumbnail &&
            data.thumbnail.source
        ) {

            return data.thumbnail.source;

        }


        if (
            data.originalimage &&
            data.originalimage.source
        ) {

            return data.originalimage.source;

        }


        return null;

    }

    catch (error) {

        console.log(
            "Image could not be loaded:",
            wikiTitle
        );

        return null;

    }

}


/* =========================================================
   CREATE DESTINATION CARD
   ========================================================= */

function createDestinationCard(
    place,
    image,
    index
) {

    const card =
        document.createElement("div");


    card.className =
        "destination-card";


    /*
       Alternate image position
    */

    if (index % 2 !== 0) {

        card.style.flexDirection =
            "row-reverse";

    }


    card.innerHTML = `

        <div class="destination-image">

            <img
                src="${image}"
                alt="${place.name}"
                loading="lazy"
            >

        </div>


        <div class="destination-info">

            <div class="destination-number">

                DESTINATION
                ${String(index + 1).padStart(2, "0")}

            </div>


            <h2>
                ${place.name}
            </h2>


            <div class="location">

                📍 ${place.location}

            </div>


            <p>

                ${place.description}

            </p>


        </div>

    `;


    return card;

}


/* =========================================================
   LOAD ALL DESTINATIONS
   ========================================================= */

async function loadDestinations() {

    const container =
        document.getElementById(
            "destinationContainer"
        );


    const count =
        document.getElementById(
            "destinationCount"
        );


    if (!container) {

        return;

    }


    container.innerHTML = "";


    if (count) {

        count.innerHTML =
            "Loading 50 destinations...";

    }


    let loadedCount = 0;


    /*
       Load each destination
       one by one.
    */

    for (
        let i = 0;
        i < destinations.length;
        i++
    ) {


        const place =
            destinations[i];


        const image =
            await getWikipediaImage(
                place.wiki
            );


        /*
           If an image exists,
           create the card.
        */

        if (image) {

            const card =
                createDestinationCard(
                    place,
                    image,
                    i
                );


            container.appendChild(card);


            loadedCount++;

        }

    }


    if (count) {

        count.innerHTML =
            loadedCount +
            " Historical Destinations";

    }


    /*
       If something went wrong
    */

    if (loadedCount === 0) {

        container.innerHTML = `

            <div class="destination-intro">

                <h2>
                    Unable to load destination images
                </h2>

                <p>
                    Please check your internet connection
                    and refresh the page.
                </p>

            </div>

        `;

    }

}


/* =========================================================
   GALLERY
   ========================================================= */

const galleryImages = [

    {
        name: "Taj Mahal",
        wiki: "Taj_Mahal"
    },

    {
        name: "Agra Fort",
        wiki: "Agra_Fort"
    },

    {
        name: "Red Fort",
        wiki: "Red_Fort"
    },

    {
        name: "Qutb Minar",
        wiki: "Qutb_Minar"
    },

    {
        name: "Amer Fort",
        wiki: "Amer_Fort"
    },

    {
        name: "Hawa Mahal",
        wiki: "Hawa_Mahal"
    },

    {
        name: "Mehrangarh Fort",
        wiki: "Mehrangarh"
    },

    {
        name: "Hampi",
        wiki: "Hampi"
    },

    {
        name: "Ajanta Caves",
        wiki: "Ajanta_Caves"
    },

    {
        name: "Ellora Caves",
        wiki: "Ellora_Caves"
    },

    {
        name: "Gateway of India",
        wiki: "Gateway_of_India"
    },

    {
        name: "Shaniwar Wada",
        wiki: "Shaniwar_Wada"
    },

    {
        name: "Mysore Palace",
        wiki: "Mysore_Palace"
    },

    {
        name: "Konark Sun Temple",
        wiki: "Konark_Sun_Temple"
    },

    {
        name: "Jagannath Temple",
        wiki: "Jagannath_Temple,_Puri"
    },

    {
        name: "Sanchi",
        wiki: "Sanchi"
    },

    {
        name: "Khajuraho",
        wiki: "Khajuraho_Group_of_Monuments"
    },

    {
        name: "Victoria Memorial",
        wiki: "Victoria_Memorial,_Kolkata"
    },

    {
        name: "Charminar",
        wiki: "Charminar"
    },

    {
        name: "Golconda Fort",
        wiki: "Golconda"
    },

    {
        name: "Brihadisvara Temple",
        wiki: "Brihadisvara_Temple"
    },

    {
        name: "Shore Temple",
        wiki: "Shore_Temple"
    },

    {
        name: "Meenakshi Temple",
        wiki: "Meenakshi_Temple"
    },

    {
        name: "Rani ki Vav",
        wiki: "Rani_ki_vav"
    }

];


/* =========================================================
   LOAD GALLERY
   ========================================================= */

async function loadGallery() {

    const gallery =
        document.getElementById(
            "galleryGrid"
        );


    if (!gallery) {

        return;

    }


    gallery.innerHTML = "";


    for (
        let i = 0;
        i < galleryImages.length;
        i++
    ) {


        const item =
            galleryImages[i];


        const image =
            await getWikipediaImage(
                item.wiki
            );


        if (!image) {

            continue;

        }


        const galleryItem =
            document.createElement("div");


        galleryItem.className =
            "gallery-item";


        galleryItem.innerHTML = `

            <img
                src="${image}"
                alt="${item.name}"
                loading="lazy"
            >

        `;


        galleryItem.addEventListener(
            "click",
            function() {

                openGallery(
                    galleryItem.querySelector("img")
                );

            }
        );


        gallery.appendChild(
            galleryItem
        );

    }

}


/* =========================================================
   GALLERY MODAL
   ========================================================= */

function openGallery(image) {

    const modal =
        document.getElementById(
            "galleryModal"
        );


    const modalImage =
        document.getElementById(
            "modalImage"
        );


    if (
        modal &&
        modalImage
    ) {

        modalImage.src =
            image.src;


        modalImage.alt =
            image.alt;


        modal.classList.add(
            "show"
        );

    }

}


/* =========================================================
   CLOSE GALLERY
   ========================================================= */

function closeGallery() {

    const modal =
        document.getElementById(
            "galleryModal"
        );


    if (modal) {

        modal.classList.remove(
            "show"
        );

    }

}


/* =========================================================
   PACKAGE BOOKING
   ========================================================= */

function bookPackage(packageName) {

    alert(

        "Thank you for choosing " +
        packageName +
        "!\n\n" +
        "Our Heritage India travel team " +
        "will contact you soon."

    );

}


/* =========================================================
   CONTACT FORM
   ========================================================= */

function submitContact(event) {

    event.preventDefault();


    alert(

        "Thank you for contacting Heritage India!\n\n" +
        "Your message has been received."

    );


    event.target.reset();

}


/* =========================================================
   LOGIN
   ========================================================= */

function loginUser(event) {

    event.preventDefault();


    const username =
        document.getElementById(
            "username"
        ).value;


    const password =
        document.getElementById(
            "password"
        ).value;


    if (
        username.trim() === "" ||
        password.trim() === ""
    ) {

        alert(
            "Please enter username and password."
        );

        return;

    }


    alert(

        "Login successful!\n\n" +
        "Welcome to Heritage India, " +
        username +
        "!"

    );

}


/* =========================================================
   PAGE LOAD
   ========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    function() {

        loadDestinations();

        loadGallery();

    }
);


/* =========================================================
   CLOSE MODAL WHEN CLICKING OUTSIDE
   ========================================================= */

window.addEventListener(
    "click",
    function(event) {

        const modal =
            document.getElementById(
                "galleryModal"
            );


        if (
            modal &&
            event.target === modal
        ) {

            closeGallery();

        }

    }
);

/* =========================================================
   HERITAGE INDIA
   50 TRAVEL PACKAGES
   ========================================================= */


const heritagePackages = [

    {
        name: "Mughal Heritage Trail",
        location: "Delhi → Agra",
        duration: "3 Days / 2 Nights",
        places: [
            "Red Fort",
            "Humayun's Tomb",
            "Taj Mahal"
        ],
        price: "₹6,500",
        wiki: "Taj_Mahal"
    },

    {
        name: "Agra Royal Heritage",
        location: "Agra, Uttar Pradesh",
        duration: "2 Days / 1 Night",
        places: [
            "Taj Mahal",
            "Agra Fort",
            "Mehtab Bagh"
        ],
        price: "₹4,999",
        wiki: "Agra_Fort"
    },

    {
        name: "Fatehpur Sikri Heritage",
        location: "Uttar Pradesh",
        duration: "2 Days / 1 Night",
        places: [
            "Fatehpur Sikri",
            "Buland Darwaza",
            "Panch Mahal"
        ],
        price: "₹4,499",
        wiki: "Fatehpur_Sikri"
    },

    {
        name: "Delhi Mughal Experience",
        location: "Delhi",
        duration: "2 Days / 1 Night",
        places: [
            "Red Fort",
            "Qutb Minar",
            "Humayun's Tomb"
        ],
        price: "₹4,999",
        wiki: "Red_Fort"
    },

    {
        name: "Qutb Heritage Journey",
        location: "Delhi",
        duration: "2 Days / 1 Night",
        places: [
            "Qutb Minar",
            "Mehrauli",
            "Lodhi Garden"
        ],
        price: "₹4,299",
        wiki: "Qutb_Minar"
    },

    {
        name: "Royal Jaipur Escape",
        location: "Jaipur, Rajasthan",
        duration: "3 Days / 2 Nights",
        places: [
            "Amer Fort",
            "Hawa Mahal",
            "City Palace"
        ],
        price: "₹6,999",
        wiki: "Amer_Fort"
    },

    {
        name: "Pink City Heritage",
        location: "Jaipur, Rajasthan",
        duration: "2 Days / 1 Night",
        places: [
            "Hawa Mahal",
            "City Palace",
            "Jantar Mantar"
        ],
        price: "₹4,999",
        wiki: "Hawa_Mahal"
    },

    {
        name: "Mewar Royal Trail",
        location: "Udaipur, Rajasthan",
        duration: "3 Days / 2 Nights",
        places: [
            "City Palace",
            "Lake Pichola",
            "Jag Mandir"
        ],
        price: "₹7,499",
        wiki: "City_Palace,_Udaipur"
    },

    {
        name: "Jodhpur Fort Expedition",
        location: "Jodhpur, Rajasthan",
        duration: "2 Days / 1 Night",
        places: [
            "Mehrangarh Fort",
            "Jaswant Thada",
            "Old City"
        ],
        price: "₹5,499",
        wiki: "Mehrangarh"
    },

    {
        name: "Golden Fort Adventure",
        location: "Jaisalmer, Rajasthan",
        duration: "3 Days / 2 Nights",
        places: [
            "Jaisalmer Fort",
            "Patwon Ki Haveli",
            "Sam Sand Dunes"
        ],
        price: "₹7,999",
        wiki: "Jaisalmer_Fort"
    },

    {
        name: "Kumbhalgarh Heritage Tour",
        location: "Rajsamand, Rajasthan",
        duration: "2 Days / 1 Night",
        places: [
            "Kumbhalgarh Fort",
            "Badal Mahal",
            "Kumbhalgarh Wildlife Sanctuary"
        ],
        price: "₹5,499",
        wiki: "Kumbhalgarh"
    },

    {
        name: "Chittorgarh Royal Journey",
        location: "Chittorgarh, Rajasthan",
        duration: "2 Days / 1 Night",
        places: [
            "Chittor Fort",
            "Vijay Stambh",
            "Kirti Stambh"
        ],
        price: "₹4,999",
        wiki: "Chittor_Fort"
    },

    {
        name: "Ranakpur Temple Trail",
        location: "Ranakpur, Rajasthan",
        duration: "2 Days / 1 Night",
        places: [
            "Ranakpur Jain Temple",
            "Sadri",
            "Aravalli Hills"
        ],
        price: "₹4,799",
        wiki: "Ranakpur_Jain_temple"
    },

    {
        name: "Ajanta Art & History",
        location: "Maharashtra",
        duration: "2 Days / 1 Night",
        places: [
            "Ajanta Caves",
            "Ancient Buddhist Paintings",
            "Rock-cut Monuments"
        ],
        price: "₹5,499",
        wiki: "Ajanta_Caves"
    },

    {
        name: "Ellora Heritage Expedition",
        location: "Maharashtra",
        duration: "2 Days / 1 Night",
        places: [
            "Ellora Caves",
            "Kailasa Temple",
            "Daulatabad"
        ],
        price: "₹5,299",
        wiki: "Ellora_Caves"
    },

    {
        name: "Mumbai Heritage Trail",
        location: "Mumbai, Maharashtra",
        duration: "2 Days / 1 Night",
        places: [
            "Gateway of India",
            "CSMT",
            "Elephanta Caves"
        ],
        price: "₹4,999",
        wiki: "Gateway_of_India"
    },

    {
        name: "Elephanta Heritage Journey",
        location: "Mumbai, Maharashtra",
        duration: "1 Day",
        places: [
            "Elephanta Caves",
            "Gateway of India",
            "Colaba"
        ],
        price: "₹2,999",
        wiki: "Elephanta_Caves"
    },

    {
        name: "Maratha History Trail",
        location: "Pune, Maharashtra",
        duration: "2 Days / 1 Night",
        places: [
            "Shaniwar Wada",
            "Sinhagad",
            "Rajgad"
        ],
        price: "₹4,999",
        wiki: "Shaniwar_Wada"
    },

    {
        name: "Deccan Fort Adventure",
        location: "Maharashtra",
        duration: "3 Days / 2 Nights",
        places: [
            "Daulatabad Fort",
            "Bibi Ka Maqbara",
            "Ellora Caves"
        ],
        price: "₹6,499",
        wiki: "Daulatabad,_Maharashtra"
    },

    {
        name: "Aurangabad Heritage Escape",
        location: "Maharashtra",
        duration: "2 Days / 1 Night",
        places: [
            "Bibi Ka Maqbara",
            "Daulatabad",
            "Ellora"
        ],
        price: "₹4,999",
        wiki: "Bibi_Ka_Maqbara"
    },

    {
        name: "Hampi Ancient Empire",
        location: "Karnataka",
        duration: "3 Days / 2 Nights",
        places: [
            "Virupaksha Temple",
            "Vittala Temple",
            "Royal Enclosure"
        ],
        price: "₹6,999",
        wiki: "Hampi"
    },

    {
        name: "Mysore Royal Palace",
        location: "Mysuru, Karnataka",
        duration: "2 Days / 1 Night",
        places: [
            "Mysore Palace",
            "Chamundi Hill",
            "Devaraja Market"
        ],
        price: "₹4,999",
        wiki: "Mysore_Palace"
    },

    {
        name: "Chalukyan Heritage Trail",
        location: "Karnataka",
        duration: "3 Days / 2 Nights",
        places: [
            "Pattadakal",
            "Aihole",
            "Badami"
        ],
        price: "₹6,499",
        wiki: "Pattadakal"
    },

    {
        name: "Badami Cave Expedition",
        location: "Karnataka",
        duration: "2 Days / 1 Night",
        places: [
            "Badami Caves",
            "Agastya Lake",
            "Pattadakal"
        ],
        price: "₹4,999",
        wiki: "Badami_cave_temples"
    },

    {
        name: "Gol Gumbaz Heritage",
        location: "Vijayapura, Karnataka",
        duration: "2 Days / 1 Night",
        places: [
            "Gol Gumbaz",
            "Ibrahim Rauza",
            "Vijayapura"
        ],
        price: "₹4,499",
        wiki: "Gol_Gumbaz"
    },

    {
        name: "Konark Temple Journey",
        location: "Odisha",
        duration: "2 Days / 1 Night",
        places: [
            "Konark Sun Temple",
            "Chandrabhaga Beach",
            "Archaeological Museum"
        ],
        price: "₹5,499",
        wiki: "Konark_Sun_Temple"
    },

    {
        name: "Puri Heritage Escape",
        location: "Puri, Odisha",
        duration: "2 Days / 1 Night",
        places: [
            "Jagannath Temple",
            "Puri Beach",
            "Konark"
        ],
        price: "₹4,999",
        wiki: "Jagannath_Temple,_Puri"
    },

    {
        name: "Buddhist Heritage Trail",
        location: "Madhya Pradesh",
        duration: "2 Days / 1 Night",
        places: [
            "Sanchi Stupa",
            "Ashoka Pillar",
            "Buddhist Monuments"
        ],
        price: "₹4,499",
        wiki: "Sanchi"
    },

    {
        name: "Khajuraho Temple Trail",
        location: "Madhya Pradesh",
        duration: "3 Days / 2 Nights",
        places: [
            "Western Group",
            "Eastern Group",
            "Southern Group"
        ],
        price: "₹6,499",
        wiki: "Khajuraho_Group_of_Monuments"
    },

    {
        name: "Gwalior Fort Expedition",
        location: "Gwalior, Madhya Pradesh",
        duration: "2 Days / 1 Night",
        places: [
            "Gwalior Fort",
            "Man Mandir Palace",
            "Sas Bahu Temple"
        ],
        price: "₹4,999",
        wiki: "Gwalior_Fort"
    },

    {
        name: "Mandu Royal Escape",
        location: "Madhya Pradesh",
        duration: "2 Days / 1 Night",
        places: [
            "Jahaz Mahal",
            "Hindola Mahal",
            "Royal Enclave"
        ],
        price: "₹4,799",
        wiki: "Mandu,_Madhya_Pradesh"
    },

    {
        name: "Kolkata Colonial Heritage",
        location: "Kolkata, West Bengal",
        duration: "2 Days / 1 Night",
        places: [
            "Victoria Memorial",
            "St. Paul's Cathedral",
            "Indian Museum"
        ],
        price: "₹4,999",
        wiki: "Victoria_Memorial,_Kolkata"
    },

    {
        name: "Nalanda Ancient University",
        location: "Bihar",
        duration: "2 Days / 1 Night",
        places: [
            "Nalanda Mahavihara",
            "Archaeological Museum",
            "Ancient Ruins"
        ],
        price: "₹4,499",
        wiki: "Nalanda"
    },

    {
        name: "Bodh Gaya Spiritual Heritage",
        location: "Bihar",
        duration: "2 Days / 1 Night",
        places: [
            "Mahabodhi Temple",
            "Bodhi Tree",
            "Great Buddha Statue"
        ],
        price: "₹4,999",
        wiki: "Mahabodhi_Temple"
    },

    {
        name: "Hyderabad Heritage Trail",
        location: "Hyderabad, Telangana",
        duration: "3 Days / 2 Nights",
        places: [
            "Charminar",
            "Golconda Fort",
            "Mecca Masjid"
        ],
        price: "₹6,499",
        wiki: "Charminar"
    },

    {
        name: "Golconda Royal Expedition",
        location: "Hyderabad, Telangana",
        duration: "2 Days / 1 Night",
        places: [
            "Golconda Fort",
            "Qutb Shahi Tombs",
            "Charminar"
        ],
        price: "₹4,999",
        wiki: "Golconda"
    },

    {
        name: "Bidar Fort Heritage",
        location: "Bidar, Karnataka",
        duration: "2 Days / 1 Night",
        places: [
            "Bidar Fort",
            "Bahmani Tombs",
            "Madrasa"
        ],
        price: "₹4,499",
        wiki: "Bidar_Fort"
    },

    {
        name: "Vellore Fort Journey",
        location: "Vellore, Tamil Nadu",
        duration: "2 Days / 1 Night",
        places: [
            "Vellore Fort",
            "Jalakanteswarar Temple",
            "Fort Museum"
        ],
        price: "₹4,499",
        wiki: "Vellore_Fort"
    },

    {
        name: "Chola Temple Heritage",
        location: "Thanjavur, Tamil Nadu",
        duration: "3 Days / 2 Nights",
        places: [
            "Brihadisvara Temple",
            "Thanjavur Palace",
            "Art Gallery"
        ],
        price: "₹6,499",
        wiki: "Brihadisvara_Temple"
    },

    {
        name: "Mahabalipuram Heritage",
        location: "Tamil Nadu",
        duration: "2 Days / 1 Night",
        places: [
            "Shore Temple",
            "Pancha Rathas",
            "Arjuna's Penance"
        ],
        price: "₹4,999",
        wiki: "Shore_Temple"
    },

    {
        name: "Madurai Temple Journey",
        location: "Madurai, Tamil Nadu",
        duration: "2 Days / 1 Night",
        places: [
            "Meenakshi Temple",
            "Thirumalai Nayak Palace",
            "Gandhi Museum"
        ],
        price: "₹4,999",
        wiki: "Meenakshi_Temple"
    },

    {
        name: "Srirangam Heritage Tour",
        location: "Tamil Nadu",
        duration: "2 Days / 1 Night",
        places: [
            "Ranganathaswamy Temple",
            "Rockfort",
            "Uraiyur"
        ],
        price: "₹4,799",
        wiki: "Ranganathaswamy_Temple,_Srirangam"
    },

    {
        name: "Rajgad Fort Adventure",
        location: "Pune, Maharashtra",
        duration: "2 Days / 1 Night",
        places: [
            "Rajgad Fort",
            "Pali Darwaza",
            "Padmavati Temple"
        ],
        price: "₹3,999",
        wiki: "Rajgad"
    },

    {
        name: "Pratapgad History Trail",
        location: "Satara, Maharashtra",
        duration: "2 Days / 1 Night",
        places: [
            "Pratapgad Fort",
            "Afzal Khan Tomb",
            "Bhavani Temple"
        ],
        price: "₹4,299",
        wiki: "Pratapgad"
    },

    {
        name: "Sinhagad Fort Experience",
        location: "Pune, Maharashtra",
        duration: "1 Day",
        places: [
            "Sinhagad Fort",
            "Kalyan Darwaza",
            "Tanaji Memorial"
        ],
        price: "₹2,499",
        wiki: "Sinhagad"
    },

    {
        name: "Rani ki Vav Heritage",
        location: "Patan, Gujarat",
        duration: "2 Days / 1 Night",
        places: [
            "Rani ki Vav",
            "Patan",
            "Sahastralinga Talav"
        ],
        price: "₹4,999",
        wiki: "Rani_ki_vav"
    },

    {
        name: "Champaner Heritage Trail",
        location: "Gujarat",
        duration: "2 Days / 1 Night",
        places: [
            "Champaner",
            "Pavagadh",
            "Jami Masjid"
        ],
        price: "₹4,799",
        wiki: "Champaner-Pavagadh_Archaeological_Park"
    },

    {
        name: "Dholavira Ancient Civilization",
        location: "Gujarat",
        duration: "3 Days / 2 Nights",
        places: [
            "Dholavira",
            "Harappan Ruins",
            "Ancient Reservoirs"
        ],
        price: "₹6,999",
        wiki: "Dholavira"
    },

    {
        name: "Lucknow Nawabi Heritage",
        location: "Lucknow, Uttar Pradesh",
        duration: "2 Days / 1 Night",
        places: [
            "Bara Imambara",
            "Rumi Darwaza",
            "Chota Imambara"
        ],
        price: "₹4,999",
        wiki: "Bara_Imambara"
    },

    {
        name: "Indore Royal Heritage",
        location: "Indore, Madhya Pradesh",
        duration: "2 Days / 1 Night",
        places: [
            "Lal Bagh Palace",
            "Rajwada Palace",
            "Krishnapura Chhatris"
        ],
        price: "₹4,599",
        wiki: "Lal_Bagh_Palace"
    }

];


/* =========================================================
   GET DESTINATION IMAGE
   ========================================================= */

async function getPackageImage(wikiTitle) {

    try {

        const apiURL =
            "https://en.wikipedia.org/api/rest_v1/page/summary/"
            + encodeURIComponent(wikiTitle);


        const response =
            await fetch(apiURL);


        if (!response.ok) {

            throw new Error(
                "Wikipedia image not found"
            );

        }


        const data =
            await response.json();


        if (
            data.thumbnail &&
            data.thumbnail.source
        ) {

            return data.thumbnail.source;

        }


        if (
            data.originalimage &&
            data.originalimage.source
        ) {

            return data.originalimage.source;

        }


        return "";

    }

    catch (error) {

        console.log(
            "Image error:",
            wikiTitle
        );

        return "";

    }

}



/* =========================================================
   CREATE PACKAGE CARD
   ========================================================= */

function createPackageCard(
    packageData,
    image,
    index
) {

    const card =
        document.createElement("div");


    card.className =
        "package-card";


    card.innerHTML = `

        <div class="package-image">

            <img
                src="${image}"
                alt="${packageData.name}"
                loading="lazy"
            >

        </div>


        <div class="package-content">


            <div class="package-number">

                HERITAGE PACKAGE
                ${String(index + 1).padStart(2, "0")}

            </div>


            <h2>
                ${packageData.name}
            </h2>


            <div class="package-info">


                <span>
                    ✦ ${packageData.location}
                </span>


                <span>
                    ✦ ${packageData.duration}
                </span>


                ${packageData.places
                    .map(place =>
                        `<span>✦ ${place}</span>`
                    )
                    .join("")}


            </div>


            <div class="package-price">

                ${packageData.price}

                <small>
                    / person
                </small>

            </div>


            <button
                class="book-btn"
                onclick="openBooking(
                    '${packageData.name.replace(/'/g, "\\'")}'
                )"
            >

                BOOK NOW

            </button>


        </div>

    `;


    return card;

}



/* =========================================================
   LOAD ALL 50 PACKAGES
   ========================================================= */

async function loadPackages() {

    const container =
        document.getElementById(
            "packagesContainer"
        );


    const count =
        document.getElementById(
            "packageCount"
        );


    if (!container) {

        return;

    }


    container.innerHTML = "";


    if (count) {

        count.innerText =
            "Loading 50 Heritage Packages...";

    }


    for (
        let i = 0;
        i < heritagePackages.length;
        i++
    ) {


        const packageData =
            heritagePackages[i];


        const image =
            await getPackageImage(
                packageData.wiki
            );


        /*
         * If image is available,
         * create the card.
         */

        if (image) {

            const card =
                createPackageCard(
                    packageData,
                    image,
                    i
                );


            container.appendChild(
                card
            );

        }

    }


    if (count) {

        count.innerText =
            "50 Heritage Packages";

    }

}



/* =========================================================
   OPEN BOOKING
   ========================================================= */

function openBooking(packageName) {

    const modal =
        document.getElementById(
            "bookingModal"
        );


    const selectedPackage =
        document.getElementById(
            "selectedPackage"
        );


    if (
        modal &&
        selectedPackage
    ) {

        selectedPackage.innerText =
            packageName;


        modal.classList.add(
            "show"
        );

    }

}



/* =========================================================
   CLOSE BOOKING
   ========================================================= */

function closeBooking() {

    const modal =
        document.getElementById(
            "bookingModal"
        );


    if (modal) {

        modal.classList.remove(
            "show"
        );

    }

}



/* =========================================================
   SUBMIT BOOKING
   ========================================================= */

function submitBooking(event) {

    event.preventDefault();


    const name =
        document.getElementById(
            "bookingName"
        ).value;


    const travellers =
        document.getElementById(
            "travellers"
        ).value;


    const packageName =
        document.getElementById(
            "selectedPackage"
        ).innerText;


    alert(

        "Thank you, " +
        name +
        "!\n\n" +

        "Package: " +
        packageName +
        "\n\n" +

        "Number of Travellers: " +
        travellers +
        "\n\n" +

        "Your booking request has been received.\n" +

        "Our Heritage India team will contact you soon."

    );


    event.target.reset();


    closeBooking();

}



/* =========================================================
   LOAD PACKAGES ONLY ON PACKAGES PAGE
   ========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    function() {

        if (
            document.getElementById(
                "packagesContainer"
            )
        ) {

            loadPackages();

        }

    }
);



/* =========================================================
   CLOSE BOOKING MODAL
   ========================================================= */

window.addEventListener(
    "click",
    function(event) {

        const modal =
            document.getElementById(
                "bookingModal"
            );


        if (
            modal &&
            event.target === modal
        ) {

            closeBooking();

        }

    }
);



/* =====================================================
   HERITAGE INDIA
   LOGIN & REGISTRATION SYSTEM
   ===================================================== */


function showRegister() {

    const loginBox =
        document.getElementById("loginBox");

    const registerBox =
        document.getElementById("registerBox");


    if (loginBox && registerBox) {

        loginBox.style.display = "none";

        registerBox.style.display = "block";

    }

}



/* =====================================================
   SHOW LOGIN FORM
   ===================================================== */

function showLogin() {

    const loginBox =
        document.getElementById("loginBox");

    const registerBox =
        document.getElementById("registerBox");


    if (loginBox && registerBox) {

        registerBox.style.display = "none";

        loginBox.style.display = "block";

    }

}



/* =====================================================
   REGISTER USER
   ===================================================== */

function registerUser(event) {

    event.preventDefault();


    const name =
        document.getElementById(
            "registerName"
        ).value.trim();


    const email =
        document.getElementById(
            "registerEmail"
        ).value.trim();


    const username =
        document.getElementById(
            "registerUsername"
        ).value.trim();


    const password =
        document.getElementById(
            "registerPassword"
        ).value;


    const confirmPassword =
        document.getElementById(
            "confirmPassword"
        ).value;



    /* ---------------------------------------------
       CHECK PASSWORD
       --------------------------------------------- */

    if (password !== confirmPassword) {

        alert(
            "Passwords do not match!"
        );

        return;

    }



    /* ---------------------------------------------
       CHECK PASSWORD LENGTH
       --------------------------------------------- */

    if (password.length < 6) {

        alert(
            "Password must contain at least 6 characters."
        );

        return;

    }



    /* ---------------------------------------------
       GET EXISTING USERS
       --------------------------------------------- */

    let users =
        JSON.parse(
            localStorage.getItem(
                "heritageIndiaUsers"
            )
        ) || [];



    /* ---------------------------------------------
       CHECK USERNAME
       --------------------------------------------- */

    const existingUser =
        users.find(
            user =>
                user.username.toLowerCase()
                === username.toLowerCase()
        );


    if (existingUser) {

        alert(
            "Username already exists. Please choose another username."
        );

        return;

    }



    /* ---------------------------------------------
       CREATE USER
       --------------------------------------------- */

    const newUser = {

        name: name,

        email: email,

        username: username,

        password: password

    };



    /* ---------------------------------------------
       SAVE USER
       --------------------------------------------- */

    users.push(newUser);


    localStorage.setItem(
        "heritageIndiaUsers",
        JSON.stringify(users)
    );



    /* ---------------------------------------------
       SUCCESS MESSAGE
       --------------------------------------------- */

    alert(
        "Registration successful!\n\n" +
        "Welcome to Heritage India, " +
        name +
        "!"
    );



    /* ---------------------------------------------
       CLEAR FORM
       --------------------------------------------- */

    document
        .getElementById("registerForm")
        .reset();



    /* ---------------------------------------------
       SHOW LOGIN
       --------------------------------------------- */

    showLogin();



    /* ---------------------------------------------
       AUTO-FILL USERNAME
       --------------------------------------------- */

    document.getElementById(
        "loginUsername"
    ).value = username;

}



/* =====================================================
   LOGIN USER
   ===================================================== */

function loginUser(event) {

    event.preventDefault();


    const username =
        document.getElementById(
            "loginUsername"
        ).value.trim();


    const password =
        document.getElementById(
            "loginPassword"
        ).value;



    /* ---------------------------------------------
       GET REGISTERED USERS
       --------------------------------------------- */

    const users =
        JSON.parse(
            localStorage.getItem(
                "heritageIndiaUsers"
            )
        ) || [];



    /* ---------------------------------------------
       FIND USER
       --------------------------------------------- */

    const user =
        users.find(
            account =>
                account.username.toLowerCase()
                === username.toLowerCase()
                &&
                account.password === password
        );



    /* ---------------------------------------------
       INVALID LOGIN
       --------------------------------------------- */

    if (!user) {

        alert(
            "Invalid username or password.\n\n" +
            "Please check your credentials or register first."
        );

        return;

    }



    /* ---------------------------------------------
       SAVE LOGIN SESSION
       --------------------------------------------- */

    localStorage.setItem(
        "heritageIndiaLoggedIn",
        JSON.stringify(user)
    );



    /* ---------------------------------------------
       SUCCESS
       --------------------------------------------- */

    alert(
        "Login successful!\n\n" +
        "Welcome back, " +
        user.name +
        "!"
    );



    /* ---------------------------------------------
       GO TO HOME PAGE
       --------------------------------------------- */

    window.location.href =
        "index.html";

}