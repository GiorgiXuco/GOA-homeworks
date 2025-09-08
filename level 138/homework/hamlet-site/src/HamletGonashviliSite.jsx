import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Music, Mic2, Calendar, MapPin, Disc3, Search } from "lucide-react";

const timeline = [
    {
        year: "1928",
        text: "დაიბადა ქართლ-კახეთის რეგიონში. მოგვიანებით გახდა ერთ-ერთი ყველაზე გავლენიანი ქართველი მრავალხმიანობის მომღერალი."
    },
    {
        year: "1950-იანები",
        text: "ქართულ ფოლკლორულ ანსამბლებში მოღვაწეობა; გამორჩეული ტემბრისა და ინტონაციის გამო ფართო ცნობადობა მოიპოვა."
    },
    {
        year: "1960–1980-იანები",
        text: "საღამოები, ჩანაწერები, საგანგებო ინტერპრეტაციები: „შენ ხარ ვენახი“, „მრავალჟამიერი“, „ჩაკრულო“ და სხვ."
    },
    {
        year: "1985",
        text: "გარდაცვალება. შემოქმედება რჩება ქართული მრავალხმიანობის ეტალონად."
    },
];

const songs = [
    {
        title: "შენ ხარ ვენახი",
        note: "საპროზოდიო ინტერპრეტაცია, მშვიდი და საოცრად გაწონასწორებული ფრაზირებით.",
        youtube: "https://www.youtube.com/watch?v=fUtR_3NKQDU",
    },
    {
        title: "მრავალჟამიერი",
        note: "ლირიკული, მაგრამ მონუმენტური შეხედულება ქართულ ჯგუფურ სიმღერაზე.",
        youtube: "https://www.youtube.com/watch?v=XTV5TgnLQ7o",
    },
    {
        title: "ჩაკრულო",
        note: "ენერგიული პოლიფონია, სოლო ხაზის გამორჩეული სისწორით.",
        youtube: "https://www.youtube.com/watch?v=oqW6NzWTTc8",
    },
];

export default function HamletGonashviliSite() {
    const [query, setQuery] = useState("");

    const filteredSongs = useMemo(() => {
        const q = query.toLowerCase();
        return songs.filter(
            (s) =>
                s.title.toLowerCase().includes(q) ||
                s.note.toLowerCase().includes(q)
        );
    }, [query]);

    return (
        <div className="min-h-screen bg-neutral-50 text-neutral-900">
            {/* HERO */}
            <section className="relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-amber-100 via-white to-emerald-100" />
                <div className="relative max-w-6xl mx-auto px-6 pt-20 pb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="flex items-center gap-3 mb-4">
                            <Mic2 className="w-6 h-6" />
                            <span className="uppercase tracking-widest text-sm">
                                ჰამლეტ გონაშვილი
                            </span>
                        </div>
                        <h1 className="text-4xl sm:text-5xl font-semibold leading-tight mb-4">
                            ქართული მრავალხმიანობის{" "}
                            <span className="underline decoration-wavy decoration-amber-400">
                                ხმადი ეტალონი
                            </span>
                        </h1>
                        <p className="text-lg max-w-3xl text-neutral-700">
                            ჰამლეტ გონაშვილი (1928–1985) — ქართველი ფოლკლორის ლეგენდა, რომელსაც
                            ხშირად „საქართველოს ხმა“ შეარქვეს. მისი ინტერპრეტაციები გამოირჩევა
                            სისუფთავით, ლაკონიურობითა და შინაგანით. ეს გვერდი მის ცხოვრებასა და
                            ჩანაწერებს მოკლედ გაცნობთ.
                        </p>
                        <div className="mt-6 flex flex-wrap gap-3">
                            <button className="px-4 py-2 bg-amber-500 text-white rounded-2xl hover:bg-amber-600">
                                Განმანათლებელი ნაშრომი
                            </button>
                            <button className="px-4 py-2 border rounded-2xl hover:bg-neutral-100">
                                Შესახებ
                            </button>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* CONTENT GRID */}
            <section className="max-w-6xl mx-auto px-6 py-10 grid md:grid-cols-3 gap-6">
                {/* ბიოგრაფია */}
                <div className="col-span-2 bg-white p-6 rounded-2xl shadow-sm">
                    <h2 className="flex items-center gap-2 text-lg font-semibold mb-4">
                        <Music className="w-5 h-5" /> მოკლე ბიოგრაფია
                    </h2>
                    <p className="text-neutral-700 leading-relaxed mb-4">
                        გონაშვილი განსაკუთრებულად ასრულებდა ქართლ-კახური სკოლის სიმღერებს —
                        სოლო ხაზი რჩებოდა მკაფიო და მშვიდი, ხმათა ბალანსი კი — ელეგანტური.
                        მისი ხმა ხშირად აღწერენ როგორც თბილს, ბალანსურ და გამჭვირვალეს.
                    </p>
                    <ul className="list-disc pl-5 space-y-1 text-neutral-700">
                        <li className="flex items-start gap-2">
                            <MapPin className="w-4 h-4 mt-1 shrink-0" />
                            სამუსიკო კარიერა დაკავშირებული იყო წამყვან ანსამბლებთან; თანამშრომლობდა უამრავ მუსიკოსთან და ეთნომუსიკოლოგთან.
                        </li>
                        <li className="flex items-start gap-2">
                            <Disc3 className="w-4 h-4 mt-1 shrink-0" />
                            დატოვა მრავალი მნიშვნელოვანი ჩანაწერი, რომლებიც დღემდე სასწავლო მასალად ითვლება.
                        </li>
                        <li className="flex items-start gap-2">
                            <Calendar className="w-4 h-4 mt-1 shrink-0" />
                            1928–1985 — ცხოვრების გზა, რომელმაც ქართული ფოლკლორი მსოფლიომდე მიიტანა.
                        </li>
                    </ul>
                </div>

                {/* ძიება */}
                <div className="bg-white p-6 rounded-2xl shadow-sm">
                    <h2 className="flex items-center gap-2 text-lg font-semibold mb-4">
                        <Search className="w-5 h-5" /> სიმღერების ძიება
                    </h2>
                    <input
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        placeholder="მოძებნეთ სიმღერა ან აღწერა..."
                        className="w-full px-3 py-2 border rounded-2xl focus:outline-none focus:ring-2 focus:ring-amber-400"
                    />
                    <div className="mt-4 space-y-3">
                        {filteredSongs.map((song, i) => (
                            <div key={i} className="p-3 border rounded-xl bg-white">
                                <h3 className="font-medium">{song.title}</h3>
                                <p className="text-sm text-neutral-600">{song.note}</p>
                            </div>
                        ))}
                        {filteredSongs.length === 0 && (
                            <p className="text-sm text-neutral-400">შედეგი არ მოიძებნა</p>
                        )}
                    </div>
                </div>
            </section>
        </div>
    );
}
