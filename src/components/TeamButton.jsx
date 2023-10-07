import { useState, useEffect } from 'react';

export default function TeamButton({ team }) {
  const [logoImg, setLogoImg] = useState();

  const fetchLogo = async () => {
    const result = await fetch(team.logoUrl);
    const imageBlob = await result.blob();
    const imageObjectUrl = URL.createObjectURL(imageBlob);
    setLogoImg(imageObjectUrl);
  };

  useEffect(() => {
    fetchLogo();
  });

  return (
    <>
      <button>
        <img src={logoImg} alt={`logo-${team.name}`} />
      </button>
    </>
  );
}
