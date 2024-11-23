import profileReducer, { addPostActionCreator } from "./profile-reducer";

// test data
let action = addPostActionCreator('hi, nigga!')
let state = {
    post: [
        {id: 1, message: 'Hi, how are u?', likesCount: '3'},
        {id: 2, message: 'Hello, world!', likesCount: '5'}
    ],
}

test('new item should be added to state!', () => {
    // action
    let newState = profileReducer(state, action)

    // expectation
    expect(newState.post.length).toBe(3);
});

test('new text should be added to state!', () => {
    // action
    let newState = profileReducer(state, action)

    // expectation
    expect(newState.post[2].message).toBe("hi, nigga!");
});
