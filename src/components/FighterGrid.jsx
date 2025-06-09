function FighterGrid() {
  const fighters = [
    {
      id: 1,
      name: "1. Naoya Inoue",
      nationality: "Japanese",
      record: "27-0-0", 
      titles: "Undisputed Super Bantamweight Champion",
      image: "/images/fighters/inoue.png",
      ringURL: 'https://ringmagazine.com/en/fighters/naoya-inoue-140'
    }, 
    {
      id: 2,
      name: "2. Oleksandr Usyk",
      nationality: "Ukrainian",
      record: "23-0-0", 
      titles: "Super Heavyweight World Champion",
      image: "/images/fighters/usyk.jpg",
      ringURL: 'https://ringmagazine.com/en/fighters/oleksandr-usyk-175'
    },
    {
      id: 3,
      name: "3. Terrence Crawford ",
      nationality: "American",
      record: "41-0-0", 
      titles: "WBA Junior Middleweight World Champion",
      image: "/images/fighters/crawford.jpg",
      ringURL: 'https://ringmagazine.com/en/fighters/terence-crawford-98'
    },
    {
      id: 4,
      name: "4. Dmitry Bivol",
      nationality: "Russian",
      record: "24-1-0", 
      titles: "The Ring Light Heavyweight World Champion",
      image: "/images/fighters/bivol.jpg",
      ringURL: 'https://ringmagazine.com/en/fighters/dmitry-bivol-392'
    },
    {
      id: 5,
      name: "5. Artur Beterbiev",
      nationality: "Canadian/Russian",
      record: "21-1-0", 
      titles: "Former Light Heavyweight World Champion",
      image: "/images/fighters/beterbiev.jpg",
      ringURL: 'https://ringmagazine.com/en/fighters/artur-beterbiev-182'
    },
    {
      id: 6,
      name: "6. Bam Rodriguez",
      nationality: "American",
      record: "21-0-0", 
      titles: "Junior Bantamweight World Champion",
      image: "/images/fighters/bam.jpg",
      ringURL: 'https://ringmagazine.com/en/fighters/jesse-rodriguez-189'
    },
    {
      id: 7,
      name: "7. Junto Nakatani",
      nationality: "Japanese",
      record: "31-0-0", 
      titles: "Unified Bantamweight World Champion",
      image: "/images/fighters/nakatani.jpg",
      ringURL: 'https://ringmagazine.com/en/fighters/junto-nakatani-133'
    },
    {
      id: 8,
      name: "8. Canelo Alvarez",
      nationality: "Mexican",
      record: "63-2-2", 
      titles: "Super Middleweight Champion",
      image: "/images/fighters/canelo.jpg",
      ringURL: 'https://ringmagazine.com/en/fighters/saul-alvarez-77'
    },
    {
      id: 9,
      name: "9. Kenshiro Teraji",
      nationality: "Japanese",
      record: "25-1-0", 
      titles: "WBC Flyweight Champion",
      image: "/images/fighters/teraji.jpg",
      ringURL: 'https://ringmagazine.com/en/fighters/kenshiro-teraji-154'
    },
    {
      id: 10,
      name: "10. David Benavidez",
      nationality: "American",
      record: "30-0-0", 
      titles: "Super Middleweight World Champion",
      image: "/images/fighters/benavidez.jpg",
      ringURL: 'https://ringmagazine.com/en/fighters/david-benavidez-609'
    }
    
  ]

  return (
    <div className="fighter-grid">
      {fighters.map(fighter => (
        <div key={fighter.id} className="fighter-card">
            <img src={fighter.image} alt={'This fighter is' + fighter.name} />
            <div className="fighter-info">
            <h3>{fighter.name}</h3>
            <p>{fighter.nationality}</p>
            <p>{fighter.record}</p>
            <p>{fighter.titles}</p>
            </div>
            <button onClick={() => window.open(fighter.ringURL, '_blank')} className="full-info">View Full Info</button>
        </div>
      ))}
    </div>
  )
}

export default FighterGrid