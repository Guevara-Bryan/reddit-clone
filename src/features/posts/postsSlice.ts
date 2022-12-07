import { createSlice, nanoid } from '@reduxjs/toolkit';

interface Post {
	id: string;
	title: string;
	content: string;
}

const initialState: Post[] = [
	{ id: nanoid(), title: 'First Post', content: 'Some content for the first post' },
	{ id: nanoid(), title: 'Second Post', content: 'Interesting developments for next post' },
	{
		id: nanoid(),
		title: 'Third Post With Very Very Long Title',
		content:
			"Curious developments for next post with a lot of very long text that won't fit in the space for the card",
	},
	{ id: nanoid(), title: 'First Post', content: 'Some content for the first post' },
	{ id: nanoid(), title: 'Second Post', content: 'Interesting developments for next post' },
	{
		id: nanoid(),
		title: 'Third Post With Very Very Long Title',
		content:
			"Curious developments for next post with a lot of very long text that won't fit in the space for the card",
	},
	{ id: nanoid(), title: 'First Post', content: 'Some content for the first post' },
	{ id: nanoid(), title: 'Second Post', content: 'Interesting developments for next post' },
	{
		id: nanoid(),
		title: 'Third Post With Very Very Long Title',
		content:
			"Curious developments for next post with a lot of very long text that won't fit in the space for the card",
	},
	{ id: nanoid(), title: 'First Post', content: 'Some content for the first post' },
	{ id: nanoid(), title: 'Second Post', content: 'Interesting developments for next post' },
	{
		id: nanoid(),
		title: 'Third Post With Very Very Long Title',
		content:
			"Curious developments for next post with a lot of very long text that won't fit in the space for the card",
	},
];

const postsSlice = createSlice({
	name: 'posts',
	initialState,
	reducers: {},
});

export default postsSlice.reducer;
