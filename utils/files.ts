import jsPDF from 'jspdf';

export const convertImageToPDF = async (imageUrl: string) => {
  const image = new Image();
  image.src = imageUrl;
  await image.decode();
  const pdf = new jsPDF();

  // Set the dimensions for the image in the PDF
  const pdfWidth = pdf.internal.pageSize.getWidth();
  const pdfHeight = pdf.internal.pageSize.getHeight();
  const aspectRatio = image.width / image.height;

  // Calculate the dimensions to fit the entire image while maintaining aspect ratio
  let imgWidth = pdfWidth;
  let imgHeight = pdfWidth / aspectRatio;

  // Adjust dimensions if the height exceeds the page height
  if (imgHeight > pdfHeight) {
    imgHeight = pdfHeight;
    imgWidth = pdfHeight * aspectRatio;
  }

  pdf.addImage(image, 'PNG', 0, 0, imgWidth, imgHeight);
  return pdf;
};

