import { collection, getDocs } from "firebase/firestore";
import { firebaseDB } from "../../config/firebase-config";

const filterBtn = document.getElementById("filter-btn");
const sortBtn = document.getElementById("sort-btn");
const contentContainer = document.getElementById("demo-content-container");

async function filterContent() {
  let category = filterBtn.value;

  try {
    const contentDocuments = [];
    const contentSnapshotRef = await getDocs(collection(firebaseDB, "content"));

    contentSnapshotRef.forEach((contentSnap) => {
      const contentDocument = contentSnap.data();
      contentDocuments.push(contentDocument);
    });

    const filteredDocuments = contentDocuments.filter((document) => {
      if (category === "all") {
        return document;
      }
      if (document.category !== category) {
        return document.decade.toString() === category;
      } else {
        return document.category === category;
      }
    });

    contentContainer.innerHTML = "";

    filteredDocuments.forEach((doc) => {
      const contentElement = document.createElement("div");

      contentElement.classList.add("content-box");

      const html = ` 
      <div data-date="${doc.decade}" class="home-timeline-l-container">
      <div class="home-year-container">
        <h2 class="home-text04 h2">${doc.decade}</h2>
      </div>
      <div class="home-line-container">
        <div class="home-line-container1">
          <img
            alt="Ellipse152915"
            src="public/external/ellipse192917-o77j-200h.png"
            class="home-ellipse15"
          />
          <div class="home-separator"></div>
        </div>
        <div class="home-image-container">
          <img
            alt="image"
            src="https://play.teleporthq.io/static/svg/default-img.svg"
            class="home-image2"
          />
        </div>
      </div>
      <div class="home-event-text-container">
        <div class="home-container10">
          <span class="home-text05">${doc.title}</span>
          <span class="home-text06">
          ${doc.content}
          </span>
        </div>
      </div>
      <div class="home-user-modal-container">
        <h2 class="home-text07">Your storIES</h2>
        <div class="home-testimonial-card">
          <div class="home-testimonial">
            <svg viewBox="0 0 1024 1024" class="home-icon08">
              <path
                d="M225 448c123.712 0 224 100.29 224 224 0 123.712-100.288 224-224 224s-224-100.288-224-224l-1-32c0-247.424 200.576-448 448-448v128c-85.474 0-165.834 33.286-226.274 93.726-11.634 11.636-22.252 24.016-31.83 37.020 11.438-1.8 23.16-2.746 35.104-2.746zM801 448c123.71 0 224 100.29 224 224 0 123.712-100.29 224-224 224s-224-100.288-224-224l-1-32c0-247.424 200.576-448 448-448v128c-85.474 0-165.834 33.286-226.274 93.726-11.636 11.636-22.254 24.016-31.832 37.020 11.44-1.8 23.16-2.746 35.106-2.746z"
              ></path>
            </svg>
            <span class="home-text08">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              In lorem lorem, malesuada in metus vitae, scelerisque
              accumsan ipsum.
            </span>
            <div class="home-like-container">
              <div class="home-container11">
                <span class="home-text09">
                  <span class="home-text10">15</span>
                  <span></span>
                  <br />
                </span>
                <span class="home-text13">Likes</span>
              </div>
              <div class="home-container12">
                <button
                  id="filter-stories"
                  type="button"
                  class="home-button3 button"
                >
                  Like
                </button>
              </div>
            </div>
          </div>
          <div class="home-container13">
            <div class="home-container14">
              <img
                alt="profile"
                src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDE0fHxwb3J0cmFpdHxlbnwwfHx8fDE2MjYzNzg5NzI&amp;ixlib=rb-1.2.1&amp;w=200"
                class="home-image3"
              />
              <span class="home-text14">Test User</span>
            </div>
          </div>
        </div>
        <div class="home-testimonial-card1">
          <div class="home-testimonial1">
            <svg viewBox="0 0 1024 1024" class="home-icon10">
              <path
                d="M225 448c123.712 0 224 100.29 224 224 0 123.712-100.288 224-224 224s-224-100.288-224-224l-1-32c0-247.424 200.576-448 448-448v128c-85.474 0-165.834 33.286-226.274 93.726-11.634 11.636-22.252 24.016-31.83 37.020 11.438-1.8 23.16-2.746 35.104-2.746zM801 448c123.71 0 224 100.29 224 224 0 123.712-100.29 224-224 224s-224-100.288-224-224l-1-32c0-247.424 200.576-448 448-448v128c-85.474 0-165.834 33.286-226.274 93.726-11.636 11.636-22.254 24.016-31.832 37.020 11.44-1.8 23.16-2.746 35.106-2.746z"
              ></path>
            </svg>
            <span class="home-text15">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              In lorem lorem, malesuada in metus vitae, scelerisque
              accumsan ipsum.
            </span>
            <div class="home-like-container1">
              <div class="home-container15">
                <span class="home-text16">
                  <span class="home-text17">15</span>
                  <span></span>
                  <br />
                </span>
                <span class="home-text20">Likes</span>
              </div>
              <div class="home-container16">
                <button
                  id="filter-stories"
                  type="button"
                  class="home-button4 button"
                >
                  Like
                </button>
              </div>
            </div>
          </div>
          <div class="home-container17">
            <div class="home-container18">
              <img
                alt="profile"
                src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDE0fHxwb3J0cmFpdHxlbnwwfHx8fDE2MjYzNzg5NzI&amp;ixlib=rb-1.2.1&amp;w=200"
                class="home-image4"
              />
              <span class="home-text21">Test User</span>
            </div>
          </div>
        </div>
      </div>
      <button
        id="filter-stories-right"
        type="button"
        class="home-button5 button"
      >
        Show YOUR STORIES
      </button>
      </div>
      `;

      contentElement.innerHTML = html;

      contentContainer.appendChild(contentElement);
    });
  } catch (error) {
    console.error("Error retrieving content:", error);
    alert("Failed to retrieve content. Please try again.");
  }
}

// Sort Content
function sortContent() {
  const isAscending = sortBtn.classList.contains("asc");

  const order = isAscending ? "ascending" : "descending";
  isAscending ? sortBtn.classList.remove("asc") : sortBtn.classList.add("asc");

  const content = Array.from(
    contentContainer.querySelectorAll(".home-timeline-l-container")
  );

  content.sort((a, b) => {
    const dateA = parseInt(a.dataset.date);
    const dateB = parseInt(b.dataset.date);

    if (order === "ascending") {
      return dateA - dateB;
    } else if (order === "descending") {
      return dateB - dateA;
    }
  });

  contentContainer.innerHTML = "";

  content.forEach((data) => contentContainer.appendChild(data));
}

filterBtn.addEventListener("change", filterContent);
sortBtn.addEventListener("click", sortContent);