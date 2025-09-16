'use client'

import { useTranslation } from "react-i18next";



export function ProjectHeader() {
    const { t } = useTranslation();

    return (
        <div className="mb-6 max-w-lg relative left-10">
            <h2 className="font-sans antialiased font-light text-3xl md:text-4xl lg:text-4xl text-stone-100 mb-4 [text-wrap:_balance]">{t("projects.title")}</h2>
            <h3 className="font-sans antialiased font-bold  text-xl w-4/5 md:w-full md:text-2xl text-stone-200 [text-wrap:_balance]">
                {t("projects.description")}
            </h3>
        </div>
    )
}