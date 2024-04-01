import { LeagueOfLegendsAPIOptions } from '@types'

export class LeagueOfLegendsAPIBadResponseException extends Error {
    constructor(
        readonly message: string,
        readonly cause: unknown
    ) {
        super(message, {
            cause,
        })
    }
}

class Fetcher {
    constructor(
        private readonly options: LeagueOfLegendsAPIOptions,
        private readonly apiUrl: string
    ) {}

    async get<T>(url: string, region?: string) {
        const response = await fetch(`https://${region || this.options.region}.${this.apiUrl}/${url}`, {
            headers: {
                'X-Riot-Token': this.options.token,
            },
        })

        const json = await response.json()

        if (!response.ok)
            throw new LeagueOfLegendsAPIBadResponseException(json?.status?.message || 'Unknown error.', json)

        return json as T
    }
}

export default Fetcher
