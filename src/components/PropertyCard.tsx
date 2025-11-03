import React from "react";
import { Link } from "react-router-dom";

interface PropertyCardProps {
  id?: string | number;
  title?: string;
  price?: string;
  img?: string;
  location?: string;
  badge?: string;
  description?: string;
  contact?: string;
  link?: string;
}

export default function PropertyCard({
  id,
  title = "Property Title",
  price = "Price on request",
  img,
  location = "Ulwe, Navi Mumbai",
  badge,
  description = "",
  contact,
  ...rest
}: PropertyCardProps) {
  return (
    <Link to={rest.link || `/property/${id ?? ""}`} className="block">
      <div className="bg-white rounded-lg shadow-lg hover:shadow-2xl transition p-4">
        <div className="relative">
          {img ? (
            <img
              src={img}
              alt={title}
              className="w-full h-44 md:h-52 object-cover rounded-md bg-gray-100"
              onError={(e) => {(e.currentTarget as HTMLImageElement).style.display = "none";}}
            />
          ) : (
            <div className="w-full h-44 md:h-52 bg-gray-100 rounded-md flex items-center justify-center text-sm text-gray-500">
              No image
            </div>
          )}

          {badge && (
            <span className="absolute top-3 left-3 text-xs font-medium bg-indigo-600 text-white px-2 py-1 rounded">
              {badge}
            </span>
          )}
        </div>

        <div className="mt-4">
          <h3 className="text-lg md:text-xl font-semibold text-slate-900 leading-tight">
            {title}
          </h3>

          <div className="flex items-center justify-between mt-2">
            <p className="text-sm text-slate-600">{location}</p>
            <div className="text-right">
              <div className="text-base md:text-lg font-bold text-emerald-600">{price}</div>
              {contact && <a className="text-xs text-slate-500 block" href={`tel:${contact}`}>Contact: {contact}</a>}
            </div>
          </div>

          {description && (
            <p className="mt-3 text-sm text-slate-700 line-clamp-3">{description}</p>
          )}

          <div className="mt-4 flex items-center gap-3">
            <button
              type="button"
              className="inline-flex items-center px-3 py-2 bg-indigo-600 text-white text-sm rounded hover:bg-indigo-700 transition"
            >
              View Details
            </button>

            <a
              href={`tel:${contact ?? ""}`}
              className="inline-flex items-center px-3 py-2 border border-slate-200 text-sm rounded hover:bg-slate-50 transition"
            >
              Call
            </a>

            <Link
              to={rest.link || `/property/${id ?? ""}`}
              className="ml-auto text-sm text-indigo-600 hover:underline"
            >
              More info
            </Link>
          </div>
        </div>
      </div>
    </Link>
  );
}
