export function generateGoogleCalendarUrl(): string {
  const title = encodeURIComponent('Enscape 3D Real-Time Rendering Masterclass (Tamil & English)');
  const details = encodeURIComponent(
    'Master photorealistic architectural rendering and VR in Enscape with Ar. Karthik Sundaram.\n\nZoom Link will be emailed 1 hour before the session.\n\nTopics: Real-time lighting, PBR materials, SketchUp/Revit live sync, 360 VR walkthroughs, and free 250+ Material Pack download.'
  );
  const location = encodeURIComponent('Live Online on Zoom (Link sent via Email & WhatsApp)');
  
  // Saturday, Oct 24, 2026, 18:30 to 20:30 IST (13:00 to 15:00 UTC)
  const start = '20261024T130000Z';
  const end = '20261024T150000Z';

  return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=${start}/${end}&details=${details}&location=${location}`;
}

export function downloadIcsFile(): void {
  const icsContent = [
    'BEGIN:VCALENDAR',
    'VERSION:2.0',
    'PRODID:-//Enscape Masterclass Tamil English//NONSGML v1.0//EN',
    'CALSCALE:GREGORIAN',
    'METHOD:PUBLISH',
    'BEGIN:VEVENT',
    'UID:enscape-masterclass-20261024@my3dvision.com',
    'DTSTAMP:20261024T100000Z',
    'DTSTART:20261024T130000Z',
    'DTEND:20261024T150000Z',
    'SUMMARY:Enscape 3D Real-Time Rendering Webinar (Tamil & English)',
    'DESCRIPTION:Bilingual 3D Architectural Visualization Masterclass with Ar. Karthik Sundaram. Topics: Lighting, PBR materials, SketchUp/Revit sync, VR walkthroughs, and 250+ Material Pack.',
    'LOCATION:Live Online on Zoom',
    'STATUS:CONFIRMED',
    'END:VEVENT',
    'END:VCALENDAR',
  ].join('\r\n');

  const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.setAttribute('download', 'enscape-webinar-pass.ics');
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}
