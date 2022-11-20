/*
    Article export type Declarations
--------------------------------------------------------------------
*/
export type postDate = {
    postDay:    number,
    postMonth:  number,
    postYear:   number,

    postHour:   number,
    postMinute: number,
    postSecond: number,
};

export type articleStub = {
    username:   string,
    title:      string,

    postedOn:   postDate,
};

export type articleData = {
    header:     articleStub,
    content:    any,
};

/*
    Initial export type Values
--------------------------------------------------------------------
*/
export const initialPostDate: postDate = {
    postDay:    0,
    postMonth:  0,
    postYear:   0,
    postHour:   0,
    postMinute: 0,
    postSecond: 0,
};

export const initialArticleStub: articleStub = {
    postID:     0,
    username:   "",
    title:      "",

    postedOn:   initialPostDate,
};

export default articleData;