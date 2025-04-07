// Job Section

export const renderJob = (title, dateRange, description) => (
  <div className="mb-4">
    <h6 className="fw-bold mb-1">{title}</h6>
    <small className="d-block fw-semibold mb-1 text-custom-blue">
      <i class="bi bi-calendar-week text-custom-blue me-2"></i> {dateRange}
    </small>
    <p className="mb-0 fw-semibold">{description}</p>
    <hr />
  </div>
);

// Education Section

export const renderEducation = (school, years, description) => (
  <div className="mb-4">
    <h6 className="fw-bold mb-1">{school}</h6>
    <small className="fw-semibold d-block mb-1 text-custom-blue">
      <i class="bi bi-calendar-week text-custom-blue me-2"></i> {years}
    </small>
    <p className="mb-0 fw-semibold">{description}</p>
    <hr />
  </div>
);

// Progress Section with percentage

export const renderProgress = (label, percent) => (
  <div className="mb-2">
    <small>{label}</small>
    <div className="progress mt-2 round-custom-bar">
      <div
        className="progress-bar bg-custom-color"
        style={{ width: `${percent}%` }}
        role="progressbar"
        aria-valuenow={percent}
        aria-valuemin="0"
        aria-valuemax="100"
      >
        {percent}%
      </div>
    </div>
  </div>
);

// Education Section without percentage
export const renderProgressWithoutPercentage = (label, percent) => (
  <div className="mb-2">
    <small>{label}</small>
    <div className="progress mt-2 height-custom-bar round-custom-bar">
      <div
        className="progress-bar bg-custom-color"
        style={{ width: `${percent}%` }}
        role="progressbar"
        aria-valuenow={percent}
        aria-valuemin="0"
        aria-valuemax="100"
      ></div>
    </div>
  </div>
);

// Footer Data
export const socialIcons = [
  "facebook",
  "instagram",
  "snapchat",
  "pinterest",
  "twitter-x",
  "linkedin",
];
