const reviewContent = document.querySelector(".review-content")
const nextBtn = document.querySelector(".next-btn")
const previousBtn = document.querySelector(".prev-btn")

const reviews = [
  {
    profile: "./assets/profile-1.png",
    name: "Sara Jones",
    role: "UX designer",
    description: "Working at this company has been an incredible experience. The collaborative culture and focus on innovation have allowed me to grow professionally and contribute to meaningful projects."
  },
  {
    profile: "./assets/profile-2.png",
    name: "John Smith",
    role: "Backend developer",
    description: "The work environment here is dynamic and challenging, which motivates me to constantly improve my skills. Additionally, the development team is very supportive and always willing to help."
  },
  {
    profile: "./assets/profile-3.png",
    name: "Emily White",
    role: "Project manager",
    description: "The company offers excellent opportunities for professional and personal development. Project management is very efficient, and teamwork and open communication are always valued."
  },
  {
    profile: "./assets/profile-4.png",
    name: "Carlos Rodriguez",
    role: "Frontend developer",
    description: "The company encourages creativity and innovation, allowing me to experiment with new technologies and approaches. The support and collaboration between teams are exceptional."
  },
  {
    profile: "./assets/profile-5.png",
    name: "Mia Zhang",
    role: "Data scientist",
    description: "Working here has allowed me to apply my knowledge to challenging and high-impact projects. The company highly values research and data analysis, which motivates me to keep learning and growing."
  }
]

let currentIndex = 0

const showReview = (index) => {
  const review = reviews[index]
  reviewContent.innerHTML = `
    <div class="img-container">
      <img src=${review.profile} alt="person" class="profile-img" />
    </div>
    <div>
      <h3 class="name">${review.name}</h3>
      <h4 class="role">${review.role}</h4>
      <p class="description">${review.description}</p>
    </div>
  `
}

nextBtn.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % reviews.length
  showReview(currentIndex)
})

previousBtn.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + reviews.length) % reviews.length
    showReview(currentIndex)
})

showReview(currentIndex)
