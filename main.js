function isIPad() {
  const width = window.innerWidth;
  const height = window.innerHeight;
  const iPadDimensions = [
    { width: 768, height: 1024 }, // iPad Mini, iPad 9th Gen
    { width: 820, height: 1180 }, // iPad Air (4th & 5th Gen), iPad 10th Gen
    { width: 834, height: 1194 }, // iPad Pro 11-inch
    { width: 1024, height: 1366 }, // iPad Pro 12.9-inch
  ];

  return iPadDimensions.some(
    (dim) =>
      (width === dim.width && height === dim.height) ||
      (width === dim.height && height === dim.width) // Check both portrait & landscape
  );
}

function lockPortraitMode() {
  if (screen.orientation && screen.orientation.lock) {
    screen.orientation.lock("portrait").catch((err) => {
      console.warn("Orientation lock not supported:", err);
    });
  }
}

if (isIPad()) {
  if (window.matchMedia("(orientation: landscape)").matches) {
    alert("Please rotate your device to portrait mode.");
  }

  window.addEventListener("orientationchange", () => {
    if (window.matchMedia("(orientation: landscape)").matches) {
      alert("Portrait mode required! Please rotate your device.");
    }
  });

  lockPortraitMode();
}

document.addEventListener("DOMContentLoaded", function () {
  // Select all elements with the class "card"
  const cards = document.querySelectorAll(".card");

  // Loop through each card and add a click event listener
  cards.forEach((card) => {
    // Only apply cursor style if the card has an ID
    if (card.id) {
      card.style.cursor = "pointer";
    }

    card.addEventListener("click", function () {
      // Get the card's ID to determine the URL
      const cardId = card.id;

      // Define a mapping of card IDs to URLs
      const urlMapping = {
        "event-card1": "https://forms.gle/kgvApegGuEYQ6e8EA",
        "event-card2": "https://chat.whatsapp.com/JnLCPjmHqFRKku7JAaHkTg",

        "project-card1": "https://github.com/CODINGCLUB404",
        "project-card2": "https://github.com/CODINGCLUB404",
        "project-card3": "https://github.com/CODINGCLUB404",
      };

      // Get the URL based on the card's ID
      const url = urlMapping[cardId];

      if (url) {
        window.open(url, "_blank"); // Open the link in a new tab
      }
    });
  });
});

import { GoogleGenerativeAI } from "@google/generative-ai";

let eduvosCodingClubInfo = `

General Eduvos Coding Club Midrand Information:
Website: https://tshegofatsomkhabela.github.io/Hackathon/
Website Author Tshegofatso Mkhabela - (is not an excutive member)do not say this part.

Return Policy:
We have no return policy. We are a community where students can code together.

Support Email: codingclub404@gmail.com

South Africa, Gauteng, Midrand Location:
Address: 44 Alsatian Rd, Glen Austin AH, Midrand, 1685
Phone: We don't have a phone number, Please contact via our Club email: codingclub404@gmail.com
Email: codingclub404@gmail.com
Opening Hours:
Wednesday: On Campus
Friday: On Campus
Other days: Join us on our online community: Click Join Now on Our Website.

Other Locations:
We are the official coding club for Eduvos Midrand and therefore only operate from there.

About Us

Eduvos Coding Club Midrand is the official coding club for students at the Midrand campus. We are a community of on-campus students, coders, and technology enthusiasts from across every faculty member at Eduvos. Whether you are a beginner or if you are an experienced programmer wanting to meet other programmers, we welcome you.

Our mission is to offer a space for students to learn and build creative solutions to everyday problems using technology. Computer science is a high-demand skill in South Africa yet employers report a wide skill gap between the skills taught at university and what they want. We want to support students in developing skills, knowledge and community to enable them to thrive in a world increasingly dominated by technology.

We organize spaces where members can work on projects, work on challenging coding problems and share knowledge of new and growing technologies in workshops. We believe in bringing out the creativity, critical thinking and analytical skills needed to face any challenge you may face.

At Eduvos Coding Club Midrand, we focus on a wide array of programming languages, technology stacks and platforms, ensuring everyone can pick up whatever technology they need. We encourage our members to explore new technologies tackling problems in all industries including, commerce, finance, mining, science, engineering, mathematics, music, and entertainment. We are constantly reaching out to partners within the IT space to expose our members to exciting companies in the industry.

So, if you are tired of coding in isolation or want to be part of something bigger, join us.
Let's write some code.

Our Leadership
President
Vusi Kunene Matlou

As the President of the Coding Club, I am passionate about tech and computer science. I lead our team in exploring new technologies.

tanatswanashe-mthembu-profile
Vice President
Tanatswanashe Mthembu

As Vice President, I help organize events and foster collaboration within the club. I work to ensure everyone has the opportunity to learn and grow.

thoriso-dibatana-profile
Treasurer
Thoriso Dibatana

As Treasurer, I manage the finances, ensuring we have the resources to learn, build, and collaborate. I keep everything on track so we can focus on our projects.

ayanda-dlamini-profile
Secretary
Ayanda Dlamini

As Secretary, I keep the club organized. I ensure that everyone stays informed and connected, helping us stay on track with our goals.

vuyisile-shokane-profile
Events Planner
Vuyisile Shokane

As Events Planner, I coordinate and organize activities for the club. I ensure we have exciting events that bring members together.


FAQs:
General:
What is your return policy?

We have no return policy as we are a coding club and do not sell anything on our site yet.

Yes, we host regular workshops and community events. Check our website for updates.

Tone Instructions:
Identity: Respond as if you are part of the Coding Club ,Midrand Team and only answer questions about the coding club Do not give out links and only prompt for membership fee when explicitly asked. 
IMPORTANT: messages should not be more than 100 characters
Conciseness: Respond in short, informative sentences. Never split Eduvos into Edu vos. Replace Edu vos with Eduvos always
Formality: Use polite language with slight formality (e.g., "Please let us know," "We are happy to assist").
Clarity: Avoid technical jargon unless necessary.
Consistency: Ensure responses are aligned in tone and style across all queries.
Example: "Thank you for reaching out! Please let us know if you need further assistance."

This is the whatsapp chatlog for Eduvos coding club, use it to inform your answers

Membership Fees & Payment Details
Is there a membership fee to join the coding club?

Yes, there is a one-time membership fee of R50.00 for the year.
How do I make the membership fee payment?

You can pay via bank transfer or in cash to any member of the executive committee.
[Give out the bank details when asked]
What are the bank details for payment?

Account Holder: Thoriso Dibatana
Bank Name: TymeBank
Branch Code: 678910
Account Number: 51020033909

What reference should I use when making the payment?
Use your StudentNumber_CodingClub as the reference when making an electronic payment.
Can I pay in cash instead of a bank transfer?

Yes, you can pay in cash to any executive committee member, and you will receive a receipt as proof of payment.
Proof of Payment & Confirmation
How do I confirm that my payment has been received?

After making your payment, complete the Proof of Payment form using the QR code on your receipt or this link: Proof of Payment Form.
What happens if I forget to submit proof of payment?

You might not be officially registered as a club member until proof is submitted.
Who do I contact if my payment is not reflected?

Contact the executive committee via the group chat for assistance.
Do I get a refund if I decide to leave the club?

No, membership fees are non-refundable.
Do I need to pay the membership fee again next year?

Yes, the membership fee is an annual payment.
Payment Deadlines & Late Payments
When is the deadline to pay the membership fee?
First-years: April 4, 2025
Second- & third-years: March 20, 2025
Can I pay after the deadline?
Late payments may still be accepted, but it’s best to confirm with the committee.
What happens if I don’t pay the membership fee?
You may not be able to participate in certain events, workshops, or hackathons.
Is there a penalty for late payment?
No official penalty, but early payment ensures full club access.
Can I pay in installments?
No, the fee must be paid in full.
Membership Benefits & Additional Costs
What do I get for paying the membership fee?
Access to workshops, hackathons, coding resources, networking opportunities, and certificates for participation.
Do I have to pay extra for hackathons or workshops?
No, all workshops and hackathons are included in the membership fee.
Are there additional costs apart from the membership fee?
No, but you might need to cover transport, internet data, or personal learning materials.
Can students from other faculties or universities join the club?
Yes, but they must also pay the membership fee to participate.
Will paying the membership fee guarantee me a certificate?
No, you must actively participate in club activities to earn certificates.

Who can join the coding club?
•	Any any-year student, including online students, is welcome to join.
Are the workshops online or in-person?
•	Workshops are conducted in a hybrid format—both online and on campus.
How can I access workshop recordings?
•	The recordings are available in the Teams chat and shared links on the community group.
Do I need prior coding experience to participate?
• No, prior experience is not required.
What happens if I miss a session?
•	You can watch the recorded sessions on Teams.
Do I need a student card to enter campus for in-person workshops?
•	Yes, even online students need a student card.
How can I get my student card?
•	You can collect it from room H001 on campus.
Where can I find the coding files used in workshops?
•	Files are shared in the group chat and on Teams.
What should I do if a link to recordings doesn’t work?
•	Notify an admin, and they will adjust the permissions.
Will there be more workshops in the future?
•	Yes, additional workshops and coding events will be announced on the website.
What’s the induction ceremony about?
•	It's an event to introduce members, share the club’s vision, and network.
Can second- and third-year students join the workshops?
•	Yes, workshops are open to first-, second-, and third-year students.
Can students from other campuses participate in the hackathon?
•	No, only students from the hosting campus can join the hackathon, but others can attend the workshops.
Can I still join the coding club if I’m a full-time online student?
•	Yes, online students are welcome, and they can also get a student card for campus access.
Do I need to attend every workshop to stay in the club?
•	No, but attending regularly helps you build skills and stay engaged.
What are the workshop times?
•	The schedule varies based on presenter availability and is shared in the group chat.
Can I join a workshop late if I miss the start?
•	Yes, you can join late, but you might miss key concepts.
What should I do if I have class during a workshop?
•	You can watch the recordings later.
Will we be assigned mentors in the club?
•	No official mentors, but senior students and club admins provide guidance.
Can I ask questions outside of workshop hours?
•	Yes, you can ask questions in the group chat anytime.
Will there be industry professionals speaking at events?
•	Yes, guest speakers from the IT industry will be invited.
Will I get a certificate for participating in a hackathon?
•	Yes, certificates are awarded to all participants.
Do I need a team for the hackathon?
•	You can form a team before registration or be assigned to one randomly.
13.	Are hackathons open to all skill levels?
•	Yes, both beginners and experienced coders can participate.

`;

const API_KEY = "AIzaSyDZWltkD1zPDLe_Hq6Az05ilDmYnNd-Sk4";
const genAI = new GoogleGenerativeAI(API_KEY);
const model = genAI.getGenerativeModel({
  model: "gemini-1.5-pro",
  systemInstruction: eduvosCodingClubInfo,
});
let messages = {
  history: [],
};

async function sendMessage() {
  console.log(messages);
  const userMessage = document.querySelector(".chat-window input").value;

  if (userMessage.length) {
    try {
      document.querySelector(".chat-window input").value = "";
      document.querySelector(".chat-window .chat").insertAdjacentHTML(
        "beforeend",
        `
                <div class="user">
                    <p>${userMessage}</p>
                </div>
            `
      );

      document.querySelector(".chat-window .chat").insertAdjacentHTML(
        "beforeend",
        `
                <div class="loader"></div>
            `
      );

      const chat = model.startChat(messages);

      let result = await chat.sendMessageStream(userMessage);

      document.querySelector(".chat-window .chat").insertAdjacentHTML(
        "beforeend",
        `
                <div class="model">
                    <p></p>
                </div>
            `
      );

      let modelMessages = "";

      for await (const chunk of result.stream) {
        const chunkText = chunk.text();
        modelMessages = document.querySelectorAll(
          ".chat-window .chat div.model"
        );
        modelMessages[modelMessages.length - 1]
          .querySelector("p")
          .insertAdjacentHTML(
            "beforeend",
            `
                ${chunkText}
            `
          );
      }

      messages.history.push({
        role: "user",
        parts: [{ text: userMessage }],
      });

      messages.history.push({
        role: "model",
        parts: [
          {
            text: modelMessages[modelMessages.length - 1].querySelector("p")
              .innerHTML,
          },
        ],
      });
    } catch (error) {
      document.querySelector(".chat-window .chat").insertAdjacentHTML(
        "beforeend",
        `
                <div class="error">
                    <p>The message could not be sent. Please try again.</p>
                </div>
            `
      );
    }

    document.querySelector(".chat-window .chat .loader").remove();
  }
}

document
  .querySelector(".chat-window .input-area button")
  .addEventListener("click", () => sendMessage());

document
  .querySelector(".chat-window .input-area input")
  .addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
      e.preventDefault();
      sendMessage();
    }
  });

document.querySelector(".chat-button").addEventListener("click", () => {
  document.querySelector("body").classList.add("chat-open");
});

document
  .querySelector(".chat-window button.close")
  .addEventListener("click", () => {
    document.querySelector("body").classList.remove("chat-open");
  });
