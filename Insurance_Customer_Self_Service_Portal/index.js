document.addEventListener("DOMContentLoaded", () => {
  const claimForm = document.getElementById("claim-form");
  const claimsList = document.getElementById("claims-list");
  const successMessage = document.getElementById("success-message");

  // Load claims from local storage or set it to an empty array if not available
  let claims = JSON.parse(localStorage.getItem("claims")) || [];

  // Update claims list when the page loads
  updateClaimsList();

  // Submit Claim
  claimForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const policyNumber = document.getElementById("policy-number").value;
    const incidentDate = document.getElementById("incident-date").value;
    const incidentDescription = document.getElementById("incident-description").value;

    const claimId = `CM${Math.floor(Math.random() * 1000)
      .toString()
      .padStart(5, "0")}`;

    const Status = ["Pending"];
    const claimStatus = Status[Math.floor(Math.random() * Status.length)];

    const claim = {
      id: claimId,
      policyNumber,
      incidentDate,
      incidentDescription,
      status: claimStatus,
    };

    claims.push(claim);
    
    // Save updated claims to local storage
    localStorage.setItem("claims", JSON.stringify(claims));

    updateClaimsList();

    claimForm.reset();
    successMessage.textContent = "Claim submitted successfully!";
    successMessage.style.color = "green";
    setTimeout(() => (successMessage.textContent = ""), 4000);
  });

  // Update Claims List
  function updateClaimsList() {
    claimsList.innerHTML = claims
      .map(
        (claim) => `
        <tr>
            <td>${claim.id}</td>
            <td>${claim.status}</td>
            <td>${claim.incidentDate}</td>
        </tr>
      `
      )
      .join("");
  }
});

// Show/hide sections based on button clicks
function showSection(sectionId) {
  const sections = document.querySelectorAll("section");
  sections.forEach((section) => section.classList.add("hidden"));
  document.getElementById(sectionId).classList.remove("hidden");
}
