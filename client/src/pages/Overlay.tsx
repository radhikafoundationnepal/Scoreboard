import { useEffect, useState } from "react";

const initial = {
  teamA: "NEPAL",
  teamB: "SRI LANKA",
  score: 86,
  wickets: 2,
  overs: "11.4",
  target: 182,
  striker: "R. PAUDEL",
  strikerRuns: 42,
  nonStriker: "A. SHEIKH",
  nonStrikerRuns: 18,
  bowler: "M. THEEKSANA",
  bowlerFigures: "2 / 24",
  logoA: "🇳🇵",
  logoB: "🇱🇰",
};

export default function Overlay() {
  const [data, setData] = useState(initial);
  const [wipe, setWipe] = useState<"four" | "six" | null>(null);

  useEffect(() => {
    const onMessage = (event: MessageEvent) => {
      if (event.data?.type === "scoreboard:update") setData((current) => ({ ...current, ...event.data.payload }));
      if (event.data?.type === "scoreboard:wipe") {
        setWipe(event.data.kind);
        window.setTimeout(() => setWipe(null), 1300);
      }
    };
    const channel = new BroadcastChannel("signal-cricket-overlay");
    channel.addEventListener("message", onMessage);
    window.addEventListener("message", onMessage);
    return () => { channel.close(); window.removeEventListener("message", onMessage); };
  }, []);

  return (
    <div className="clean-output">
      <div className="output-safe-frame">
        <div className="output-live"><span /> LIVE · ICC MEN'S T20 WORLD CUP</div>
        <div className="output-watermark">SIGNAL<span>//</span>CRICKET</div>
        <div className="output-strip">
          <div className="output-team"><span className="output-logo">{data.logoA}</span><div><small>INNINGS 01</small><strong>{data.teamA}</strong></div></div>
          <div className="output-score"><strong>{data.score}<span>/{data.wickets}</span></strong><small>{data.overs} OVERS · TARGET {data.target}</small></div>
          <div className="output-batter"><small>BATTERS</small><strong>{data.striker} <b>{data.strikerRuns}</b></strong><strong>{data.nonStriker} <b>{data.nonStrikerRuns}</b></strong></div>
          <div className="output-bowler"><small>BOWLING</small><strong>{data.bowler}</strong><span>{data.bowlerFigures}</span></div>
          <div className="output-team output-team-right"><div><small>INNINGS 02</small><strong>{data.teamB}</strong></div><span className="output-logo">{data.logoB}</span></div>
        </div>
      </div>
      {wipe && <div className={`output-wipe output-wipe-${wipe}`}><div><span>{wipe === "six" ? "✦" : "⚡"}</span><strong>{wipe.toUpperCase()}</strong><small>{wipe === "six" ? "MAXIMUM · R. PAUDEL" : "BOUNDARY · R. PAUDEL"}</small></div></div>}
    </div>
  );
}
