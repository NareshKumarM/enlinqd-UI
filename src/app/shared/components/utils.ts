
export default class Utils {

    public static isNullOrWhitespace(input: string): boolean {
        return !input || input.match(/^ *$/) !== null;
    }

    public static isNullOrUndefined(input: any): boolean {
        return input === null || input === undefined;
    }

    public static caseInsensitiveMatch(
        filterString: string,
        comparer: string
    ): boolean {
        if (
            Utils.isNullOrWhitespace(filterString) ||
            Utils.isNullOrWhitespace(comparer)
        ) {
            return false;
        }

        return comparer
            ?.trim()
            .toLowerCase()
            .includes(filterString.trim().toLowerCase());
    }

    public static caseInsensitiveEqualMatch(
        filterString: string,
        comparer: string
    ): boolean {
        if (
            Utils.isNullOrWhitespace(filterString) ||
            Utils.isNullOrWhitespace(comparer)
        ) {
            return false;
        }

        return (
            comparer?.trim()?.toLowerCase() === filterString?.trim()?.toLowerCase()
        );
    }

    public static isEmpty(value: string): boolean {
        return !value || value.length <= 0;
    }

    public static GenerateGUID(): string {
        return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (c) => {
            // eslint-disable-next-line no-bitwise
            const r = (Math.random() * 16) | 0;
            // eslint-disable-next-line no-bitwise
            const v = c === "x" ? r : (r & 0x3) | 0x8;

            return v.toString(16);
        });
    }
}