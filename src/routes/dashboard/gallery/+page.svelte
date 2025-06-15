<script lang="ts">
    import type { PageData } from './$types';
    import { Skeleton } from '$lib/components/ui/skeleton';

    let { data }: { data: PageData } = $props();
    let loadingStates = $state<Record<string, boolean>>({});
    let errorStates = $state<Record<string, boolean>>({});
    let fullscreenVideo = $state<string | null>(null);

    function getVideoType(url: string | undefined | null): string {
        if (typeof url === 'string') {
            if (url.endsWith('.mp4')) {
                return 'video/mp4';
            } else if (url.endsWith('.webm')) {
                return 'video/webm';
            }
        }
        return 'video/mp4'; 
    }

    function handleVideoLoadStart(videoId: string) {
        loadingStates[videoId] = true;
        errorStates[videoId] = false;
    }

    function handleVideoCanPlay(videoId: string) {
        loadingStates[videoId] = false;
    }

    function handleVideoError(videoId: string) {
        loadingStates[videoId] = false;
        errorStates[videoId] = true;
    }

    function handleVideoLoadedData(videoId: string) {
        loadingStates[videoId] = false;
    }

    function openFullscreen(videoId: string) {
        fullscreenVideo = videoId;
        // Prevent body scroll when modal is open
        document.body.style.overflow = 'hidden';
    }

    function closeFullscreen() {
        fullscreenVideo = null;
        document.body.style.overflow = 'auto';
    }

    function handleKeydown(event: KeyboardEvent) {
        if (event.key === 'Escape' && fullscreenVideo) {
            closeFullscreen();
        }
    }
</script>

<!-- svelte:window bind:keydown={handleKeydown} / -->
<svelte:window onkeydown={handleKeydown} />

<div class="p-6">
    <div class="mb-8">
        <h1 class="text-3xl font-bold text-gray-900 mb-2">Video Gallery</h1>
        <p class="text-gray-600">Discover and watch amazing videos</p>
    </div>

    <!-- Video Grid -->
    <div class="grid grid-cols-2 xsm:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
        {#each data.videos as video}
            <div 
                class="video-tile group relative aspect-square bg-black overflow-hidden cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-xl h-38 w-38"
                onclick={() => openFullscreen(video.id)}
                role="button"
                tabindex="0"
                onkeydown={(e) => e.key === 'Enter' && openFullscreen(video.id)}
            >
                <!-- Video Background -->
                <div class="absolute inset-0">
                    {#if errorStates[video.id]}
                        <div class="w-full h-full bg-gray-800 flex items-center justify-center">
                            <div class="text-center">
                                <svg class="w-12 h-12 text-gray-500 mx-auto mb-2" fill="currentColor" viewBox="0 0 20 20">
                                    <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clip-rule="evenodd" />
                                </svg>
                                <p class="text-sm text-gray-400">Failed to load</p>
                            </div>
                        </div>
                    {:else}
                        <!-- svelte-ignore a11y_media_has_caption -->
                        <video 
                            id="preview-{video.id}"
                            class="w-full h-full object-cover"
                            poster={video.thumbnailUrl}
                            preload="metadata"
                            muted
                            onloadstart={() => handleVideoLoadStart(video.id)}
                            oncanplay={() => handleVideoCanPlay(video.id)}
                            onloadeddata={() => handleVideoLoadedData(video.id)}
                            onerror={() => handleVideoError(video.id)}
                            onmouseenter={(e) => {
                                const videoEl = e.target as HTMLVideoElement;
                                videoEl.currentTime = 0;
                                videoEl.play().catch(() => {});
                            }}
                            onmouseleave={(e) => {
                                const videoEl = e.target as HTMLVideoElement;
                                videoEl.pause();
                            }}
                        >
                            <source src={video.videoUrl} type={getVideoType(video.videoUrl)} />
                        </video>
                    {/if}
                </div>

                <!-- Loading overlay -->
                {#if loadingStates[video.id]}
                    <div class="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                        <Skeleton class="w-8 h-8 rounded-full" />
                    </div>
                {/if}

                <!-- Gradient overlay for better text readability -->
                <div class="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>


                <!-- Title overlay -->
                <div class="absolute bottom-0 left-0 right-0 p-3 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <h3 class="text-white font-semibold text-sm line-clamp-2 drop-shadow-lg">{video.title}</h3>
                    <p class="text-white text-xs opacity-90 mt-1">{video.author}</p>
                </div>

                <!-- Duration badge -->
                <div class="absolute top-2 right-2 bg-black bg-opacity-75 text-white text-xs px-2 py-1 rounded opacity-80">
                    {video.duration}
                </div>
            </div>
        {/each}
    </div>
</div>

<!-- Fullscreen Video Modal -->
{#if fullscreenVideo}
    {@const currentVideo = data.videos.find(v => v.id === fullscreenVideo)}
    {#if currentVideo}
        <!-- svelte-ignore a11y_interactive_supports_focus -->
        <!-- svelte-ignore a11y_click_events_have_key_events -->
        <div 
            class="fixed inset-0 z-50 bg-black bg-opacity-95 flex items-center justify-center p-4"
            onclick={closeFullscreen}
            role="dialog"
            aria-modal="true"
        >
            <div class="relative w-full max-w-6xl aspect-video">
                <!-- Close button -->
                <button 
                    class="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors z-10"
                    onclick={closeFullscreen}
                    aria-label="Close video"
                >
                    <svg class="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
                    </svg>
                </button>

                <!-- Video player -->
                <!-- svelte-ignore a11y_no_static_element_interactions -->
                <div 
                    class="w-full h-full bg-black rounded-lg overflow-hidden"
                    onclick={(e) => e.stopPropagation()}
                >
                    <!-- svelte-ignore a11y_media_has_caption -->
                    <video 
                        id="fullscreen-{currentVideo.id}"
                        class="w-full h-full"
                        controls
                        autoplay
                        poster={currentVideo.thumbnailUrl}
                        preload="metadata"
                    >
                        <source src={currentVideo.videoUrl} type={getVideoType(currentVideo.videoUrl)} />
                        Your browser does not support the video tag.
                    </video>
                </div>

                <!-- Video info -->
                <div class="absolute -bottom-20 left-0 right-0 text-white">
                    <h2 class="text-xl font-bold mb-1">{currentVideo.title}</h2>
                    <p class="text-gray-300 text-sm">
                        {currentVideo.author} • {currentVideo.views} views • {currentVideo.uploadTime}
                    </p>
                </div>
            </div>
        </div>
    {/if}
{/if}

<style>
    .video-tile {
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    }
    
    .line-clamp-2 {
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;
    }
</style>