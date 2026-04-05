import { jsPDF } from 'jspdf';

function safeText(value) {
  if (value === null || value === undefined) return '-';
  return String(value);
}

export function generateMockInterviewReportPdf({
  candidateName,
  interviewDate,
  evaluation,
  questions,
  answers,
}) {
  const doc = new jsPDF({ unit: 'pt', format: 'a4' });
  const pageWidth = doc.internal.pageSize.getWidth();
  const pageHeight = doc.internal.pageSize.getHeight();
  const margin = 40;
  const contentWidth = pageWidth - margin * 2;
  let y = 44;

  const ensurePage = (neededHeight = 18) => {
    if (y + neededHeight > pageHeight - 40) {
      doc.addPage();
      y = 44;
    }
  };

  const addWrappedText = (text, x, size = 11, color = [38, 24, 13], lineGap = 14) => {
    doc.setFontSize(size);
    doc.setTextColor(...color);
    const lines = doc.splitTextToSize(safeText(text), contentWidth - (x - margin));
    lines.forEach((line) => {
      ensurePage(lineGap);
      doc.text(line, x, y);
      y += lineGap;
    });
  };

  doc.setFillColor(253, 238, 228);
  doc.rect(0, 0, pageWidth, 86, 'F');
  doc.setTextColor(194, 103, 58);
  doc.setFontSize(22);
  doc.setFont('helvetica', 'bold');
  doc.text('Placementor AI', margin, 38);

  doc.setTextColor(26, 17, 8);
  doc.setFontSize(15);
  doc.text('Mock Interview Report', margin, 60);

  doc.setFontSize(11);
  doc.setFont('helvetica', 'normal');
  doc.text(`Candidate: ${safeText(candidateName)}`, margin, 78);
  doc.text(`Date: ${safeText(interviewDate)}`, pageWidth - margin - 180, 78);

  y = 110;

  doc.setDrawColor(239, 217, 197);
  doc.setFillColor(250, 245, 240);
  doc.roundedRect(margin, y, contentWidth, 84, 10, 10, 'FD');
  y += 24;
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(13);
  doc.setTextColor(26, 17, 8);
  doc.text('Score Summary', margin + 14, y);

  y += 24;
  doc.setFontSize(11);
  doc.setFont('helvetica', 'normal');
  doc.text(`Total Score: ${safeText(evaluation?.totalScore)} / 100`, margin + 14, y);
  doc.text(
    `MCQ Score: ${safeText(evaluation?.mcqScore)} / ${safeText(evaluation?.mcqTotal)}`,
    margin + 220,
    y
  );

  y += 18;
  doc.text(
    `English Score: ${safeText(evaluation?.englishScore)} / ${safeText(evaluation?.englishTotal || 10)}`,
    margin + 14,
    y
  );
  doc.text(
    `MCQ %: ${safeText(evaluation?.sectionBreakdown?.mcqPercentage)} | English %: ${safeText(evaluation?.sectionBreakdown?.englishPercentage)}`,
    margin + 220,
    y
  );

  y += 30;
  doc.setFont('helvetica', 'bold');
  doc.setTextColor(194, 103, 58);
  doc.text('Overall AI Summary', margin, y);
  y += 16;
  doc.setFont('helvetica', 'normal');
  addWrappedText(evaluation?.overallSummary || 'No summary available.', margin);

  y += 4;
  doc.setFont('helvetica', 'bold');
  doc.setTextColor(194, 103, 58);
  doc.text('Strengths', margin, y);
  y += 14;
  doc.setFont('helvetica', 'normal');
  const strengths = Array.isArray(evaluation?.strengths) ? evaluation.strengths : [];
  if (strengths.length === 0) {
    addWrappedText('-', margin + 8);
  } else {
    strengths.forEach((item) => addWrappedText(`- ${item}`, margin + 8));
  }

  y += 6;
  doc.setFont('helvetica', 'bold');
  doc.setTextColor(194, 103, 58);
  doc.text('Areas of Improvement', margin, y);
  y += 14;
  doc.setFont('helvetica', 'normal');
  const improvements = Array.isArray(evaluation?.improvements) ? evaluation.improvements : [];
  if (improvements.length === 0) {
    addWrappedText('-', margin + 8);
  } else {
    improvements.forEach((item) => addWrappedText(`- ${item}`, margin + 8));
  }

  y += 10;
  doc.setFont('helvetica', 'bold');
  doc.setTextColor(194, 103, 58);
  doc.text('Question-wise Review', margin, y);
  y += 12;

  const feedbackMap = new Map(
    (evaluation?.writtenFeedback || []).map((item) => [String(item.questionId), item])
  );

  questions.forEach((q, idx) => {
    ensurePage(80);
    y += 10;

    doc.setDrawColor(239, 217, 197);
    doc.setFillColor(255, 255, 255);
    doc.roundedRect(margin, y, contentWidth, 20, 5, 5, 'FD');
    y += 14;

    doc.setFont('helvetica', 'bold');
    doc.setTextColor(26, 17, 8);
    doc.setFontSize(11);
    addWrappedText(`Q${idx + 1}. ${q.question}`, margin + 8, 11, [26, 17, 8], 13);

    doc.setFont('helvetica', 'normal');
    doc.setTextColor(70, 56, 43);
    const answer = answers?.[String(q.id)] || '-';
    addWrappedText(`Your Answer: ${answer}`, margin + 8, 10, [70, 56, 43], 13);

    if (q.type === 'mcq') {
      const isCorrect = String(answer).toLowerCase() === String(q.correctAnswer || '').toLowerCase();
      addWrappedText(
        `Correct Option: ${safeText(q.correctAnswer)} (${isCorrect ? 'Correct' : 'Incorrect'})`,
        margin + 8,
        10,
        [70, 56, 43],
        13
      );
    } else {
      const fb = feedbackMap.get(String(q.id));
      addWrappedText(
        `AI Feedback: ${fb?.feedback || 'No feedback available.'}`,
        margin + 8,
        10,
        [70, 56, 43],
        13
      );
      addWrappedText(
        `English Score: ${safeText(fb?.score)} / 10`,
        margin + 8,
        10,
        [70, 56, 43],
        13
      );
    }
  });

  doc.save(`Placementor_Mock_Interview_Report_${Date.now()}.pdf`);
}
