import { ref } from "vue"

const body = document.body

let isVisible = ref(false)
let sidebarContent = ref<ContentOptions>("UserContent")

type ContentOptions = "UserContent" | "CartContent"

function showSidebar(newContent: ContentOptions) {
	body.style.overflow = "hidden"
	body.style.height = "100%"
	body.classList.add("active-sidebar")
	sidebarContent.value = newContent
	isVisible.value = true
}

function hideSidebar() {
	body.style.overflow = ""
	body.style.height = ""
	body.classList.remove("active-sidebar")
	isVisible.value = false
}

export default function () {
	return { isVisible, sidebarContent, showSidebar, hideSidebar }
}
