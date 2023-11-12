const Scroll_3D = {
    path: '/Scroll_3D',
    lazy: async () => {
        let { Scroll_3DPage } = await import("../../pages/Scroll_3DPage/Scroll_3DPage.jsx");
        return { Component: Scroll_3DPage }
    }
}

export { Scroll_3D }