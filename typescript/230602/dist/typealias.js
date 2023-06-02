let user = {
    id: 1,
    name: "홍길동",
    nickname: "dd",
    birth: "200.01.01",
    bio: "hi"
};
let code = {
    Korea: "ko",
    Usa: "us",
    UK: "uk",
};
let stringMap2 = {
    key: "string"
};
let keyPair = {
    key: "key",
    value: 0
};
let stringMap3 = {
    key: "value"
};
function goToSchool(user) {
    if (user.profile.type !== "student") {
        console.log("잘못 오셨습니다!!");
        return;
    }
    const school = user.profile.school;
    console.log(`${school}로 등교 완료`);
}
const developerUser = {
    name: "영심이",
    profile: {
        type: "developer",
        skill: "typescript"
    }
};
const studentUser = {
    name: "통키",
    profile: {
        type: "student",
        school: "피식대학"
    }
};
export {};
