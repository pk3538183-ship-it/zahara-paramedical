const studentData = [
  {
    id: 'ZPM-2025-001',
    name: 'Maeraj Rajper',
    nic: '42101-1234567-8',
    course: 'Nursing Assistant',
    duration: '6 Months',
    batch: 'Batch 01',
    startDate: '2025-01-10',
    endDate: '2025-07-10',
    status: 'Completed',
    center: 'Asma Medical Center',
    phone: '0300-1234567',
    certificateNo: 'ZPM-2025-001-C'
  },
  {
    id: 'ZPM-2025-002',
    name: 'Aqib Gilal',
    nic: '42201-5678485-3',
    course: 'Lab Technician',
    duration: '1 Year',
    batch: 'Batch 02',
    startDate: '2025-02-15',
    endDate: '2026-02-15',
    status: 'In Progress',
    center: 'Asma Medical Center',
    phone: '0312-7654321',
    certificateNo: 'Pending'
  },
  {
    id: 'ZPM-2025-003',
    name: 'Nisar Ahmed',
    nic: '45205-6972858-1',
    course: 'Dispenser',
    duration: '1 Year',
    batch: 'Batch 03',
    startDate: '2001-03-05',
    endDate: '2002-03-05',
    status: 'Completed',
    center: 'Asma Medical Center',
    phone: '0307-9202326',
    certificateNo: 'ZPM-2025-003-C'
  },
  {
    id: 'ZPM-2025-004',
    name: 'Hassan Ali',
    nic: '42101-4455667-2',
    course: 'Dialysis Technician',
    duration: '6 Months',
    batch: 'Batch 04',
    startDate: '2025-04-01',
    endDate: '2025-10-01',
    status: 'In Progress',
    center: 'Asma Medical Center',
    phone: '0333-6055649',
    certificateNo: 'Pending'
  },
  {
    id: 'ZPM-2025-005',
    name: 'Maria Shah',
    nic: '42101-5566778-3',
    course: 'Medical Records & Billing',
    duration: '6 Months',
    batch: 'Batch 01',
    startDate: '2025-01-20',
    endDate: '2025-07-20',
    status: 'Completed',
    center: 'Asma Medical Center',
    phone: '0321-3456789',
    certificateNo: 'ZPM-2025-005-C'
  }
];

const form = document.querySelector('#searchForm');
const resultBox = document.querySelector('#resultBox');

function formatDate(dateStr) {
  if (!dateStr) return 'N/A';
  const date = new Date(dateStr);
  return date.toLocaleDateString('en-GB', {
    day: '2-digit',
    month: 'short',
    year: 'numeric'
  });
}

function renderResult(student) {
  resultBox.innerHTML = `
    <h3>${student.name}</h3>
    <div class="result-grid">
      <div>
        <strong>Student ID</strong>
        <span>${student.id}</span>
      </div>
      <div>
        <strong>Course</strong>
        <span>${student.course}</span>
      </div>
      <div>
        <strong>Duration</strong>
        <span>${student.duration}</span>
      </div>
      <div>
        <strong>Batch</strong>
        <span>${student.batch}</span>
      </div>
      <div>
        <strong>Start Date</strong>
        <span>${formatDate(student.startDate)}</span>
      </div>
      <div>
        <strong>End Date</strong>
        <span>${formatDate(student.endDate)}</span>
      </div>
      <div>
        <strong>Status</strong>
        <span>${student.status}</span>
      </div>
      <div>
        <strong>Certificate No.</strong>
        <span>${student.certificateNo}</span>
      </div>
      <div>
        <strong>Center</strong>
        <span>${student.center}</span>
      </div>
      <div>
        <strong>Phone</strong>
        <span>${student.phone}</span>
      </div>
      <div>
        <strong>NIC</strong>
        <span>${student.nic}</span>
      </div>
      <div>
        <strong>Verification</strong>
        <span>Verified</span>
      </div>
    </div>
  `;
}

function renderNotFound(query) {
  resultBox.innerHTML = `
    <p>No record found for <strong>${query}</strong>.</p>
    <p>Please check the Student ID, CNIC, or full name and try again.</p>
  `;
}

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const input = document.querySelector('#studentSearch');
  const query = input.value.trim();

  if (!query) {
    resultBox.innerHTML = '<p>Please enter a Student ID, CNIC, or name.</p>';
    return;
  }

  const match = studentData.find((student) => {
    const searchableText = [
      student.id,
      student.name,
      student.nic,
      student.course
    ]
      .join(' ')
      .toLowerCase();

    return searchableText.includes(query.toLowerCase());
  });

  if (match) {
    renderResult(match);
  } else {
    renderNotFound(query);
  }
});

const contactForm = document.querySelector('.contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', (event) => {
    event.preventDefault();
    alert('Thank you! Your inquiry has been submitted successfully.');
    contactForm.reset();
  });
}
