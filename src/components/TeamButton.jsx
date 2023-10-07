import { useState, useEffect, useCallback } from 'react';

export default function TeamButton({ team }) {
  const [logoImg, setLogoImg] = useState();

  const fetchLogo = useCallback(async () => {
    const result = await fetch(team.logoUrl);
    const imageBlob = await result.blob();
    const imageObjectUrl = URL.createObjectURL(imageBlob);
    setLogoImg(imageObjectUrl);
  }, [team.logoUrl]);

  useEffect(() => {
    fetchLogo();
  }, [fetchLogo]);

  return (
    <>
      <button>
        <img src={logoImg} alt={`logo-${team.name}`} />
      </button>
    </>
  );
}
