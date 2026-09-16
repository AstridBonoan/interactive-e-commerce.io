"use client";

import { LivingItem } from "@/components/art/living-items";
import { CleanRoom, QuietDoor, RoomDefs } from "@/components/apartment/primitives";
import { motion } from "framer-motion";
import type { RoomId } from "@/types/store";

export function RoomScene({ roomId }: { roomId: RoomId }) {
  switch (roomId) {
    case "room-1":
      return <LivingRoom />;
    case "room-2":
      return <Wardrobe />;
    case "room-3":
      return <Kitchen />;
    case "room-4":
      return <Den />;
    case "room-5":
      return <Attic />;
    default:
      return <LivingRoom />;
  }
}

function LivingRoom() {
  return (
    <svg viewBox="0 0 1600 900" className="h-full w-full" role="img" aria-label="Sitting room">
      <RoomDefs />
      <CleanRoom />

      <rect x="56" y="88" width="216" height="236" fill="url(#sky)" />
      <rect x="56" y="88" width="16" height="236" fill="#f3ead2" />
      <rect x="256" y="88" width="16" height="236" fill="#f3ead2" />
      <rect x="56" y="88" width="216" height="12" fill="#f3ead2" />
      <path d="M80 148h42M80 184h58M186 166h32" stroke="#b9c7d4" strokeWidth="7" strokeLinecap="round" />
      <path d="M48 88c0 70 8 140 0 236h8V88z" fill="#efe4ce" />
      <path d="M272 88c0 70-8 140 0 236h-8V88z" fill="#efe4ce" />

      <rect x="48" y="458" width="236" height="182" rx="3" fill="#5a3a26" />
      <rect x="62" y="472" width="96" height="72" fill="#6b4a32" />
      <rect x="174" y="472" width="96" height="72" fill="#6b4a32" />
      <LivingItem name="turntable" x={64} y={468} width={200} height={160} />

      <rect x="298" y="132" width="78" height="104" fill="#f7f3ea" />
      <circle cx="322" cy="176" r="16" fill="#c9b8d4" opacity="0.75" />
      <circle cx="344" cy="188" r="18" fill="#8aa3c4" opacity="0.55" />
      <rect x="392" y="156" width="48" height="38" fill="#f7f3ea" />
      <circle cx="416" cy="174" r="7" fill="#7a8f6e" />
      <rect x="818" y="126" width="56" height="74" fill="#f7f3ea" />
      <circle cx="846" cy="156" r="16" fill="none" stroke="#2b241c" strokeWidth="1.4" />

      <rect x="460" y="118" width="430" height="258" rx="4" fill="#16181d" />
      <motion.g animate={{ opacity: [0.55, 1, 0.72] }} transition={{ duration: 3.4, repeat: Infinity }}>
        <circle cx="676" cy="230" r="42" fill="#2d6b8a" opacity="0.38" />
        <circle cx="676" cy="230" r="22" fill="#3d8aaa" opacity="0.55" />
        <circle cx="676" cy="230" r="8" fill="#6ec8c0" opacity="0.85" />
      </motion.g>
      <rect x="664" y="376" width="22" height="26" fill="#16181d" />

      <rect x="268" y="500" width="672" height="140" rx="10" fill="#e8b7a6" />
      <rect x="292" y="524" width="52" height="38" rx="6" fill="#f4e6c8" />
      <rect x="836" y="532" width="52" height="34" rx="6" fill="#b7c9b0" />
      <rect x="250" y="618" width="16" height="22" fill="#e8b7a6" />
      <rect x="942" y="618" width="16" height="22" fill="#e8b7a6" />
      <LivingItem name="shirt" x={268} y={488} width={110} height={110} />
      <LivingItem name="speaker" x={538} y={458} width={110} height={150} />
      <LivingItem name="hoodie" x={690} y={478} width={130} height={130} />

      <rect x="418" y="654" width="292" height="14" fill="#efe6d6" />
      <rect x="414" y="668" width="10" height="22" fill="#d8c8b0" />
      <rect x="704" y="668" width="10" height="22" fill="#d8c8b0" />
      <LivingItem name="book" x={548} y={612} width={70} height={50} />
      <LivingItem name="shoes" x={320} y={632} width={80} height={50} />

      <LivingItem name="lamp" x={930} y={250} width={110} height={390} />
      <Bookcase x={1100} y={72} />
      <LivingItem name="headphones" x={1234} y={318} width={80} height={80} />
      <QuietDoor x={1328} y={360} width={28} height={280} />

      <rect x="1360" y="430" width="208" height="210" fill="#efe6d6" />
      <LivingItem name="laptop" x={1368} y={292} width={180} height={130} />
      <LivingItem name="lamp" x={1488} y={280} width={80} height={140} />
      <ellipse cx="1524" cy="628" rx="28" ry="12" fill="#1b1b1d" />

      <QuietDoor x={0} y={360} width={28} height={280} />
      <QuietDoor x={1572} y={360} width={28} height={280} />
    </svg>
  );
}

function Bookcase({ x, y }: { x: number; y: number }) {
  const spines = ["#5b8ec9", "#c45c4a", "#e6b54a", "#4f7a45", "#7b6aa5", "#d8c8b0", "#3d6aa5", "#c4783a"];
  const rows = [0, 1, 2, 3, 4, 5, 6];

  return (
    <g transform={`translate(${x} ${y})`}>
      <rect width="228" height="568" fill="#6b4a32" />
      <circle cx="168" cy="-8" r="7" fill="#4f7a45" />
      {rows.map((row) => (
        <g key={row}>
          <rect x="12" y={70 + row * 70} width="204" height="6" fill="#5a3d2a" />
          {Array.from({ length: 7 }).map((_, index) => (
            <rect
              key={index}
              x={18 + index * 22}
              y={38 + row * 70 + (index % 3) * 4}
              width={16 + (index % 3)}
              height={32 - (index % 3) * 4}
              fill={spines[(row + index) % spines.length]}
            />
          ))}
        </g>
      ))}
      <rect x="154" y="368" width="34" height="42" fill="#f7f3ea" />
      <path d="M168 508h22c6 16-6 26-16 26h-16z" fill="#c45c4a" />
    </g>
  );
}

function Wardrobe() {
  return (
    <svg viewBox="0 0 1600 900" className="h-full w-full" role="img" aria-label="Wardrobe">
      <RoomDefs />
      <CleanRoom wall="#f7f1e8" />
      <rect x="80" y="110" width="200" height="230" fill="url(#sky)" />
      <rect x="80" y="110" width="14" height="230" fill="#efe6d4" />
      <rect x="266" y="110" width="14" height="230" fill="#efe6d4" />

      <path d="M120 250h430" stroke="#c4b8a4" strokeWidth="4" />
      <LivingItem name="shirt" x={128} y={232} width={90} height={120} />
      <LivingItem name="hoodie" x={228} y={222} width={110} height={140} />
      <LivingItem name="shirt" x={338} y={232} width={90} height={120} />
      <LivingItem name="shirt" x={438} y={222} width={90} height={130} />

      <LivingItem name="closet" x={610} y={170} width={260} height={470} />

      <rect x="120" y="500" width="360" height="70" fill="#c4a06a" />
      <LivingItem name="pants" x={128} y={410} width={100} height={120} />
      <LivingItem name="shorts" x={218} y={430} width={100} height={110} />
      <LivingItem name="book" x={328} y={430} width={90} height={80} />
      <LivingItem name="lamp" x={880} y={230} width={100} height={220} />
      <LivingItem name="radio" x={888} y={380} width={90} height={80} />

      <LivingItem name="recording" x={1010} y={150} width={190} height={56} />
      <LivingItem name="door" x={1040} y={210} width={130} height={430} />
      <rect x="1280" y="220" width="220" height="22" fill="#6b4a32" />
      <LivingItem name="hat" x={1288} y={230} width={70} height={60} />
      <LivingItem name="shoes" x={340} y={720} width={120} height={70} />
    </svg>
  );
}

function Kitchen() {
  return (
    <svg viewBox="0 0 1600 900" className="h-full w-full" role="img" aria-label="Kitchen">
      <RoomDefs />
      <CleanRoom wall="#f3eee4" />
      <rect x="200" y="100" width="220" height="220" fill="url(#sky)" />
      <QuietDoor x={40} y={220} width={110} height={420} />
      <QuietDoor x={1450} y={220} width={110} height={420} />
      <LivingItem name="shirt" x={158} y={240} width={100} height={130} />
      <LivingItem name="hat" x={286} y={310} width={60} height={50} />

      <rect x="240" y="360" width="1120" height="280" fill="#efe6d6" />
      <rect x="256" y="376" width="1088" height="28" fill="#f7f1e8" />

      <LivingItem name="coffee" x={410} y={318} width={130} height={140} />
      <LivingItem name="kettle" x={560} y={360} width={110} height={110} />
      <LivingItem name="toaster" x={700} y={380} width={120} height={100} />
      <LivingItem name="book" x={840} y={350} width={90} height={90} />
      <rect x="1180" y="220" width="160" height="420" rx="6" fill="#d8ddd4" />
      <rect x="1196" y="236" width="128" height="150" fill="#b7c4a0" />
      <circle cx="1230" cy="280" r="8" fill="#c45c4a" />
      <rect x="1260" y="270" width="40" height="14" fill="#e6b54a" />
    </svg>
  );
}

function Den() {
  return (
    <svg viewBox="0 0 1600 900" className="h-full w-full" role="img" aria-label="Den">
      <RoomDefs />
      <CleanRoom wall="#efe8dc" />
      <QuietDoor x={40} y={220} width={110} height={420} />
      <QuietDoor x={1450} y={220} width={110} height={420} />

      <LivingItem name="tv" x={520} y={120} width={460} height={280} />
      <LivingItem name="speaker" x={280} y={360} width={110} height={220} />
      <LivingItem name="speaker" x={1120} y={360} width={110} height={220} />

      <rect x="280" y="460" width="520" height="140" rx="10" fill="#d7c4b0" />
      <LivingItem name="shirt" x={600} y={440} width={130} height={140} />
      <LivingItem name="book" x={780} y={520} width={80} height={70} />
      <LivingItem name="turntable" x={910} y={490} width={230} height={140} />
      <LivingItem name="mic" x={1190} y={270} width={110} height={220} />
    </svg>
  );
}

function Attic() {
  return (
    <svg viewBox="0 0 1600 900" className="h-full w-full" role="img" aria-label="Attic">
      <rect width="1600" height="900" fill="#f4efe6" />
      <path d="M0 250L800 40l800 210v650H0z" fill="#f7f1e8" />
      <rect x="0" y="640" width="1600" height="260" fill="#7c5a36" />
      <LivingItem name="door" x={28} y={400} width={120} height={240} />

      <rect x="90" y="140" width="100" height="110" fill="#f7f3ea" />
      <path d="M110 210c20-24 50 4 70-16" stroke="#8aa3c4" strokeWidth="3" fill="none" />

      <LivingItem name="bed" x={150} y={430} width={380} height={220} />
      <LivingItem name="shirt" x={230} y={440} width={120} height={120} />
      <LivingItem name="shorts" x={410} y={490} width={100} height={100} />

      <rect x="600" y="480" width="380" height="160" fill="#efe6d6" />
      <LivingItem name="book" x={610} y={490} width={100} height={90} />
      <LivingItem name="radio" x={760} y={490} width={90} height={80} />
      <LivingItem name="lamp" x={820} y={330} width={110} height={220} />
      <rect x="980" y="500" width="50" height="28" fill="#efe2c4" />

      <LivingItem name="bed" x={1070} y={430} width={380} height={220} />
      <LivingItem name="vest" x={1160} y={430} width={120} height={130} />
      <LivingItem name="hat" x={1380} y={410} width={70} height={60} />
    </svg>
  );
}
