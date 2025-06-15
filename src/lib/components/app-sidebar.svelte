<script lang="ts">
    import HouseIcon from "@lucide/svelte/icons/house";
 import VideoIcon from "@lucide/svelte/icons/video";
 import BookIcon from "@lucide/svelte/icons/book";
 import * as Sidebar from "$lib/components/ui/sidebar/index.js";
 const items = [
  {
   title: "Generate",
   url: "/generate",
   icon: HouseIcon,
  },
  {
   title: "Gallery",
   url: "/generate/gallery",
   icon: VideoIcon,
  },
    {
     title: "Scripts",
     url: "/generate/scripts",
     icon: BookIcon,
    },
 ]; import CalendarIcon from "@lucide/svelte/icons/calendar";
 
 
</script>
 
<Sidebar.Root>
 <Sidebar.Content>
  <Sidebar.Group>
   <Sidebar.GroupLabel>Application</Sidebar.GroupLabel>
   <Sidebar.GroupContent>
    <Sidebar.Menu>
     {#each items as item (item.title)}
      <Sidebar.MenuItem>
       <Sidebar.MenuButton>
        {#snippet child({ props })}
         <a href={item.url} {...props}>
          <item.icon />
          <span>{item.title}</span>
         </a>
        {/snippet}
       </Sidebar.MenuButton>
      </Sidebar.MenuItem>
     {/each}
    </Sidebar.Menu>
   </Sidebar.GroupContent>
  </Sidebar.Group>
 </Sidebar.Content>
</Sidebar.Root>