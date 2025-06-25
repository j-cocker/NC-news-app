export const formatTimeSpan = (timeSpan) => {
    //
    if (timeSpan.days()) return `${timeSpan.days()} days ago`;
    else if (timeSpan.hours()) return `${timeSpan.hours()} hours ago`;
    else if (timeSpan.minutes()) return `${timeSpan.minutes()} minutes ago `;
    else return `${timeSpan.seconds()} seconds ago `;
};
