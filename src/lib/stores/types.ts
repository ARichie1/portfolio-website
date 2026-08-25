export interface Project {
    id: number;
    title: string,
    description: string,
    tools: string[],
    image: string,
    code: string,
    demo: string,
    viewCode: boolean,
    viewDemo: boolean,
    inDevelopement: boolean,
    /** Shown in the home page's 4-project preview. Set/reorder manually — first 4 `true` entries are used. */
    featured?: boolean
}
