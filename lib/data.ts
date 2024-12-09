export function generateHistoryData() {
  return [
    {
      id: "1",
      date: "2024-03-20",
      type: "portrait",
      status: "completed",
      filename: "portrait_pro_1.jpg",
    },
    {
      id: "2",
      date: "2024-03-19",
      type: "upload",
      status: "completed",
      filename: "photo_original_1.jpg",
    },
    {
      id: "3",
      date: "2024-03-18",
      type: "portrait",
      status: "processing",
      filename: "portrait_pro_2.jpg",
    },
  ] as const;
}