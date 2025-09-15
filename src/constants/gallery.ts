import { MediaItem } from "@/types";

export const MEDIA_ITEMS: MediaItem[] = [
    {
        id: 1,
        src: "/images/media/images/g1.webp",
        alt: "Community Dental Health Education Program",
        title: "Community Dental Health Education Program",
        type: "image"
    },
    {
        id: 2,
        src: "/images/media/videos/v1.webm",
        alt: "Your Smile is Our Passion - Welcome to BiratCity Dental",
        title: "Your Smile is Our Passion - Welcome to BiratCity Dental",
        type: "video",
        // poster: "/images/gallery/v1-poster.webp" // Optional: thumbnail for the video
    },
    {
        id: 3,
        src: "/images/media/images/g2.webp",
        alt: "Grand Opening Ceremony - Birat City Dental Clinic",
        title: "Grand Opening Ceremony - Birat City Dental Clinic",
        type: "image"
    },
    {
        id: 4,
        src: "/images/media/images/g3.webp",
        alt: "Dr. Ambika Shah - Your Trusted Dentist at BiratCity Dental Clinic",
        title: "Dr. Ambika Shah - Your Trusted Dentist at BiratCity Dental Clinic",
        type: "image"
    },
    {
        id: 5,
        src: "/images/media/images/g4.webp",
        alt: "BiratCity Dental Clinic - Serving Our Community Through Free Dental Checkups",
        title: "SBiratCity Dental Clinic - Serving Our Community Through Free Dental Checkups",
        type: "image"
    },
    {
        id: 6,
        src: "/images/media/images/g5.webp",
        alt: "BiratCity Dental Clinic - Supporting Education Through Community Partnerships",
        title: "BiratCity Dental Clinic - Supporting Education Through Community Partnerships",
        type: "image"
    },
    {
        id: 7,
        src: "/images/media/videos/v2.webm",
        alt: "BiratCity Dental Clinic - Making a Difference in Our Community",
        title: "BiratCity Dental Clinic - Making a Difference in Our Community",
        type: "video"
    },
    {
        id: 8,
        src: "/images/media/images/g6.webp",
        alt: "Successful Tooth Extraction - Expert Surgical Care",
        title: "Successful Tooth Extraction - Expert Surgical Care",
        type: "image"
    },
    {
        id: 9,
        src: "/images/media/images/g7.webp",
        alt: "Precision Dental Care - Advanced Restorative Treatment",
        title: "Precision Dental Care - Advanced Restorative Treatment",
        type: "image"
    },
    {
        id: 10,
        src: "/images/media/videos/v3.webm",
        alt: "BiratCity Dental Clinic - Making a Difference in Our Community",
        title: "BiratCity Dental Clinic - Making a Difference in Our Community",
        type: "video"
    },
    {
        id: 11,
        src: "/images/media/images/g8.webp",
        alt: "Grand Opening Ceremony - Birat City Dental Clinic",
        title: "Grand Opening Ceremony - Birat City Dental Clinic",
        type: "image"
    },
    {
        id: 12,
        src: "/images/media/images/g9.webp",
        alt: "BiratCity Dental Clinic - School Health Program Partnership",
        title: "BiratCity Dental Clinic - School Health Program Partnership",
        type: "image"
    },
    {
        id: 13,
        src: "/images/media/images/g10.webp",
        alt: "BiratCity Dental Clinic - Supporting Education Through Community Partnerships",
        title: "BiratCity Dental Clinic - Supporting Education Through Community Partnerships",
        type: "image"
    },
    {
        id: 14,
        src: "/images/media/images/g11.webp",
        alt: "BiratCity Dental Clinic - Supporting Education Through Community Partnerships",
        title: "BiratCity Dental Clinic - Supporting Education Through Community Partnerships",
        type: "image"
    },
    {
        id: 15,
        src: "/images/media/videos/v4.webm",
        alt: "Welcome to BiratCity Dental Clinic - Grand Opening Celebration",
        title: "Welcome to BiratCity Dental Clinic - Grand Opening Celebration",
        type: "video"
    },
    {
        id: 16,
        src: "/images/media/images/g12.webp",
        alt: "BiratCity Dental Clinic - Supporting Education Through Community Partnerships",
        title: "BiratCity Dental Clinic - Supporting Education Through Community Partnerships",
        type: "image"
    },
    {
        id: 17,
        src: "/images/media/images/g13.webp",
        alt: "BiratCity Dental Clinic - Supporting Education Through Community Partnerships",
        title: "BiratCity Dental Clinic - Supporting Education Through Community Partnerships",
        type: "image"
    },
    {
        id: 18,
        src: "/images/media/videos/v5.webm",
        alt: "Amazing Smile Transformation - Before & After Results",
        title: "Amazing Smile Transformation - Before & After Results",
        type: "video"
    },
    {
        id: 19,
        src: "/images/media/images/g14.webp",
        alt: "Compassionate Dental Care - Patient Comfort is Our Priority",
        title: "Compassionate Dental Care - Patient Comfort is Our Priority",
        type: "image"
    },
    {
        id: 20,
        src: "/images/media/images/g15.webp",
        alt: "BiratCity Dental Clinic - Free Community Dental Screening Program",
        title: "BiratCity Dental Clinic - Free Community Dental Screening Program",
        type: "image"
    },
    {
        id: 21,
        src: "/images/media/images/g16.webp",
        alt: "Comfortable Dental Experience - Modern Care in a Relaxing Environment",
        title: "Comfortable Dental Experience - Modern Care in a Relaxing Environment",
        type: "image"
    },
    // {
    //     id: 22,
    //     src: "/images/media/images/g17.webp",
    //     alt: "Comfortable Dental Experience - Modern Care in a Relaxing Environment",
    //     title: "Comfortable Dental Experience - Modern Care in a Relaxing Environment",
    //     type: "image"
    // },
    // {
    //     id: 21,
    //     src: "/images/media/videos/v6.webm",
    //     alt: "Ultrasonic Scaling Results - Before & After Deep Cleaning",
    //     title: "Ultrasonic Scaling Results - Before & After Deep Cleaning",
    //     type: "video"
    // },
];

// Legacy export for backward compatibility
export const PHOTOS = MEDIA_ITEMS.filter(item => item.type === 'image');

// Helper functions for filtering media
export const getImages = () => MEDIA_ITEMS.filter(item => item.type === 'image');
export const getVideos = () => MEDIA_ITEMS.filter(item => item.type === 'video');
export const getAllMedia = () => MEDIA_ITEMS;