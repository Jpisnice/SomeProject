import type { PageServerLoad } from './$types';

export const load = (async () => {
    // Using smaller, optimized video files for smoother playback
    const videos = [
        {
            id: "1",
            title: "Big Buck Bunny",
            thumbnailUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/BigBuckBunny.jpg",
            duration: "0:10",
            uploadTime: "Dec 15, 2023",
            views: "1,234,567",
            author: "Blender Foundation",
            videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
            description: "Big Buck Bunny tells the story of a giant rabbit with a heart bigger than himself.",
            subscriber: "2.5M Subscribers",
            isLive: false
        },
        {
            id: "2", 
            title: "Elephant Dreams",
            thumbnailUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ElephantsDream.jpg",
            duration: "0:11",
            uploadTime: "Nov 20, 2023",
            views: "987,654",
            author: "Blender Foundation",
            videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
            description: "The first Blender Open Movie from 2006. A story about a mechanical world.",
            subscriber: "2.5M Subscribers",
            isLive: false
        },
        {
            id: "3",
            title: "For Bigger Blazes",
            thumbnailUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ForBiggerBlazes.jpg", 
            duration: "0:15",
            uploadTime: "Oct 10, 2023",
            views: "756,432",
            author: "Google",
            videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
            description: "A demo video showcasing high-quality video streaming capabilities.",
            subscriber: "10M Subscribers",
            isLive: false
        },
        {
            id: "4",
            title: "For Bigger Escape",
            thumbnailUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ForBiggerEscapes.jpg",
            duration: "0:15", 
            uploadTime: "Sep 5, 2023",
            views: "543,210",
            author: "Google",
            videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
            description: "Experience the beauty of nature in this stunning demo video.",
            subscriber: "10M Subscribers",
            isLive: false
        },
        {
            id: "5",
            title: "For Bigger Fun",
            thumbnailUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ForBiggerFun.jpg",
            duration: "0:15",
            uploadTime: "Aug 18, 2023", 
            views: "432,109",
            author: "Google",
            videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
            description: "Fun and entertainment in this colorful demo video.",
            subscriber: "10M Subscribers",
            isLive: false
        },
        {
            id: "6",
            title: "For Bigger Joyrides",
            thumbnailUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ForBiggerJoyrides.jpg",
            duration: "0:15",
            uploadTime: "Jul 22, 2023",
            views: "321,098",
            author: "Google", 
            videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
            description: "Take a joyride through this amazing demo video experience.",
            subscriber: "10M Subscribers",
            isLive: false
        },
        {
            id: "7",
            title: "For Bigger Meltdowns",
            thumbnailUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ForBiggerMeltdowns.jpg",
            duration: "0:15",
            uploadTime: "Jun 30, 2023",
            views: "210,987",
            author: "Google",
            videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4", 
            description: "A dramatic demo showcasing video quality and performance.",
            subscriber: "10M Subscribers",
            isLive: false
        },
        {
            id: "8",
            title: "Sintel",
            thumbnailUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/Sintel.jpg",
            duration: "0:15",
            uploadTime: "May 15, 2023",
            views: "654,321",
            author: "Blender Foundation",
            videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4",
            description: "Sintel is a short computer animated film by the Blender Institute.",
            subscriber: "2.5M Subscribers", 
            isLive: false
        }
    ];
    
    return { videos };
}) satisfies PageServerLoad;