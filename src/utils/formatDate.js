export const formatDate = (date) => {
    const dateObj = new Date(date);
    return dateObj.toLocaleString("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    });
  };