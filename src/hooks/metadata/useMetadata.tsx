import { useEffect } from "react";

interface MetadataOptions {
    title?: string;
    description?: string;
}

export function useMetadata({ title, description }: MetadataOptions) {
    useEffect(() => {
        if (title) {
            document.title = title;
        }

        if (description) {
            let descTag = document.querySelector("meta[name='description']");
            if (!descTag) {
                descTag = document.createElement("meta");
                descTag.setAttribute("name", "description");
                document.head.appendChild(descTag);
            }
            descTag.setAttribute("content", description);
        }
    }, [title, description]);
}
