import {UserType} from "../HW8";


type sortListUpAC = ReturnType<typeof sortListUpAC>;
type sortListDownAC = ReturnType<typeof sortListDownAC>;
type checkListAC = ReturnType<typeof checkListAC>;
type actionType = sortListUpAC | sortListDownAC | checkListAC

export const homeWorkReducer = (state: UserType[], action: actionType): UserType[] => {
    switch (action.type) {
        case 'sort': {
            switch (action.payload) {
                case "up":

                    return [...state].sort(
                            (a, b) => a.name.toLowerCase() <= b.name.toLowerCase() ? -1 : 1)
                case "down":
                    return [...state].sort(
                            (a, b) => a.name.toLowerCase() <= b.name.toLowerCase() ? 1 : -1)

                default:
                            throw new Error('Please, enter valid sorting type!')
                    }
            }

        case "check": {
            return state.filter(member => member.age >= action.payload)
        }
        default:
            return state
    }
}

export const sortListUpAC = () => ({
    type: "sort",
    payload: "up"
} as const)

export const sortListDownAC = () => ({
    type: "sort",
    payload: "down"
} as const)

export const checkListAC = () => ({
    type: "check",
    payload: 18
} as const)

