export function MarqueeSkills() {
  return (
    <>
      <small className="font-bold text-white text-base">Skills:</small>
      <div className="relative max-w-full overflow-hidden whitespace-nowrap container-marquee">
        <div className="marquee flex space-x-8 animate-marquee">
          <p className="font-bold text-4xl text-gray-400">ReactJS</p>
          <p className="font-bold text-4xl text-gray-400">Vue</p>
          <p className="font-bold text-4xl text-gray-400">SASS</p>
          <p className="font-bold text-4xl text-gray-400">CSS</p>
          <p className="font-bold text-4xl text-gray-400">HTML</p>
          <p className="font-bold text-4xl text-gray-400">SFCC</p>
          <p className="font-bold text-4xl text-gray-400">Gulp</p>
          <p className="font-bold text-4xl text-gray-400">Git</p>
        </div>
      </div>
    </>
  );
}
