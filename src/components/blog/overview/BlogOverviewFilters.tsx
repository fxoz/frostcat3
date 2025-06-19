"use client";

import React from "react";

type BlogOverviewFiltersProps = {
  tags: string[];
  selectedTag: string | null;
  onSelectTag: (tag: string | null) => void;
};

export default function BlogOverviewFilters({
  tags,
  selectedTag,
  onSelectTag,
}: BlogOverviewFiltersProps) {
  const isSelected = (tag: string | null) => selectedTag === tag;

  const tagButton = (tag: string | null, label: string) => (
    <button
      key={tag}
      type="button"
      className={`pr-2 rounded-full px-2 active:scale-95 transition-transform border-2 border-c-primary-shade ${
        isSelected(tag)
          ? "bg-c-gradient-primary-light-lighter opacity-100"
          : "bg-c-gradient-primary-light opacity-60"
      } hover:bg-c-gradient-primary-light-lighter`}
      onClick={() => onSelectTag(tag)}
    >
      {label}
    </button>
  );

  return (
    <div className="mb-4">
      <p className="italic pr-2 pb-2">Nach Thema filtern:</p>
      <div className="flex flex-wrap gap-2">
        {tagButton(null, "Alle")}
        {tags.map((tag) => tagButton(tag, tag))}
      </div>
    </div>
  );
}
