import React from "react";
import PropTypes from "prop-types";
import { motion } from "framer-motion";

/**
 * Reusable CarCard component — pass props to render different cars.
 */
function CarCard({
    title,
    image,
    price,
    currency = "₾",
    year,
    mileage,
    transmission,
    fuel,
    description,
    tags = [],
    onBuy,
}) {
    return (
        <motion.div
            whileHover={{ y: -4 }}
            className="group h-full rounded-2xl border bg-white shadow-sm hover:shadow-md transition-shadow overflow-hidden"
        >
            <div className="relative aspect-[16/10] w-full overflow-hidden">
                <img
                    src={image}
                    alt={title}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    loading="lazy"
                />
                <div className="absolute left-3 top-3 rounded-full bg-black/70 px-3 py-1 text-xs text-white">
                    {year}
                </div>
            </div>

            <div className="flex flex-col gap-3 p-4">
                <div className="flex items-start justify-between gap-2">
                    <h3 className="text-lg font-semibold leading-snug">{title}</h3>
                    <div className="shrink-0 rounded-xl bg-gray-100 px-3 py-1 text-sm font-semibold">
                        {currency}
                        {price.toLocaleString()}
                    </div>
                </div>

                <p className="text-sm text-gray-600 line-clamp-3">{description}</p>

                <div className="grid grid-cols-3 gap-2 text-xs text-gray-700">
                    <Spec label="გარბენი" value={Intl.NumberFormat().format(mileage) + " კმ"} />
                    <Spec label="ტრანსმისია" value={transmission} />
                    <Spec label="საწვავი" value={fuel} />
                </div>

                {!!tags.length && (
                    <div className="flex flex-wrap gap-2 pt-1">
                        {tags.map((t) => (
                            <span
                                key={t}
                                className="rounded-full bg-gray-100 px-2.5 py-1 text-xs text-gray-700"
                            >
                                {t}
                            </span>
                        ))}
                    </div>
                )}

                <div className="mt-1 flex items-center justify-between">
                    <button
                        onClick={onBuy}
                        className="rounded-2xl bg-black px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-gray-800"
                    >
                        ყიდვა
                    </button>
                    <a
                        href="#"
                        className="text-sm text-gray-700 underline-offset-2 hover:underline"
                    >
                        დეტალურად
                    </a>
                </div>
            </div>
        </motion.div>
    );
}

function Spec({ label, value }) {
    return (
        <div className="rounded-xl border p-2">
            <div className="text-[10px] uppercase tracking-wide text-gray-500">{label}</div>
            <div className="font-medium">{value}</div>
        </div>
    );
}

CarCard.propTypes = {
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    currency: PropTypes.string,
    year: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    mileage: PropTypes.number.isRequired,
    transmission: PropTypes.string.isRequired,
    fuel: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    tags: PropTypes.arrayOf(PropTypes.string),
    onBuy: PropTypes.func,
};

/**
 * Example usage — One component (CarCard) with different props.
 * The default export renders a grid of different cars.
 */
export default function CarCardsDemo() {
    const cars = [
        {
            title: "BMW 3 Series 330i",
            image:
                "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?q=80&w=1200&auto=format&fit=crop",
            price: 39990,
            year: 2020,
            mileage: 54000,
            transmission: "ავტომატიკა",
            fuel: "ბენზინი",
            description:
                "სპორტული სედანი ზუსტი მართვითა და ეკონომიური 2.0 ტურბო ძრავით. მდიდარი კომპლექტაცია და სერვის-ისტორია.",
            tags: ["RWD", "LED", "Apple CarPlay"],
        },
        {
            title: "Toyota RAV4 Hybrid",
            image:
                "https://images.unsplash.com/photo-1590362891991-f776e747a588?q=80&w=1200&auto=format&fit=crop",
            price: 35900,
            year: 2019,
            mileage: 72000,
            transmission: "ავტომატიკა",
            fuel: "ჰიბრიდი",
            description:
                "სანდო და ეკონომიური კვროსოვერი, მაღალი კლირენსითა და აქტიური უსაფრთხოების ტექნოლოგიებით.",
            tags: ["AWD", "Toyota Safety Sense", "Hybrid"]
        },
        {
            title: "Mercedes-Benz C200",
            image:
                "https://images.unsplash.com/photo-1619767886558-efdc259cde1b?q=80&w=1200&auto=format&fit=crop",
            price: 42900,
            year: 2021,
            mileage: 33000,
            transmission: "ავტომატიკა",
            fuel: "ბენზინი",
            description:
                "კომფორტული პრემიუმ სედანი თანამედროვე ინტერიერით, ციფრული დაფით და მშვენიერი ხმის იზოლაციით.",
            tags: ["LED", "Camera 360", "MBUX"],
        },
        {
            title: "Audi Q5 45 TFSI",
            image:
                "https://images.unsplash.com/photo-1617814076367-b6585b438dee?q=80&w=1200&auto=format&fit=crop",
            price: 47900,
            year: 2020,
            mileage: 59000,
            transmission: "ავტომატიკა",
            fuel: "ბენზინი",
            description:
                "აუდის კვატროს სისტემით, კომფორტული ოჯახური SUV მოწინავე მულტიმედიითა და უსაფრთხოებით.",
            tags: ["quattro", "Virtual Cockpit", "ACC"],
        },
    ];

    const handleBuy = (car) => () => {
        alert(`შეარჩიეთ: ${car.title} — ფასი: ₾${car.price.toLocaleString()}`);
    };

    return (
        <div className="mx-auto max-w-7xl p-6">
            <header className="mb-6 flex items-end justify-between gap-4">
                <div>
                    <h1 className="text-2xl font-bold">მანქანის ქარდები</h1>
                    <p className="text-gray-600">ერთი კომპონენტი (CarCard) — სხვადასხვა props</p>
                </div>
            </header>

            <div className="mb-5 flex items-center gap-3">
                <input
                    type="text"
                    placeholder="ძებნა მოდელით…"
                    className="w-full rounded-2xl border px-4 py-2 outline-none focus:ring-2 focus:ring-black/10"
                    onChange={(e) => console.log("search:", e.target.value)}
                />
                <select className="rounded-2xl border px-3 py-2">
                    <option>დალაგება: ფასით ↑</option>
                    <option>დალაგება: ფასით ↓</option>
                    <option>დალაგება: გარბენით</option>
                    <option>დალაგება: წლით</option>
                </select>
            </div>

            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {cars.map((car) => (
                    <CarCard key={car.title} {...car} onBuy={handleBuy(car)} />
                ))}
            </div>
        </div>
    );
}
