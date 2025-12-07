import Home from "../pages/Home";
import Login from "../pages/login";
import About from "../pages/about";
import Page from "../pages/404Page";
import SignUp from "../pages/SignUp";



const routes: Record<string, Function> = {
  "/": Home,
  "/login": Login,
  "/home" : Home,
  "/about": About,
  "/404": Page,
  "/sign_up": SignUp,
};

export async function navigateTo(url: string) {
  history.pushState(null, "", url);
  router();
}

export function router() {
  const app = document.getElementById("app")!;
  // Fade out old page
  app.classList.add("opacity-0");

  setTimeout(() => {
    const match = routes[location.pathname] || Page;

    // Replace page content
    app.innerHTML = match();

    // Fade in new page
    requestAnimationFrame(() => {
      app.classList.remove("opacity-0");
    });
  }, 350); // fade-out duration
}


// Listen to back/forward buttons
window.addEventListener("popstate", router);

// Intercept <a data-link>
document.addEventListener("click", (e) => {
  const target = e.target as HTMLElement;
  if (target.matches("[data-link]")) {
    e.preventDefault();
    navigateTo(target.getAttribute("href")!);
  }
});

