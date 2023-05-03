export interface Subscriber {
    func: () => void,
    owner: string,
    key: string
}