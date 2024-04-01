import Fetcher from '@fetcher'

import LeagueOfLegendsPlatformStatusApi from '@api/LOL-STATUS-V4'
import LeagueOfLegendsSpectatorApi from '@api/SPECTATOR-V4'
import LeagueOfLegendsLeagueExpApi from '@api/LEAGUE-EXP-V4'
import LeagueOfLegendsChampionApi from '@api/CHAMPION-V3'
import LeagueOfLegendsSummonerApi from '@api/SUMMONER-V4'
import LeagueOfLegendsLeagueApi from '@api/LEAGUE-V4'
import LeagueOfLegendsClashApi from '@api/CLASH-V1'
import LeagueOfLegendsMatchApi from '@api/MATCH-V5'

import { LeagueOfLegendsAPIOptions } from '@types'

class LeagueOfLegendsAPI {
    private readonly url = 'api.riotgames.com'

    public status: LeagueOfLegendsPlatformStatusApi
    public spectator: LeagueOfLegendsSpectatorApi
    public leagueExp: LeagueOfLegendsLeagueExpApi
    public champion: LeagueOfLegendsChampionApi
    public summoner: LeagueOfLegendsSummonerApi
    public league: LeagueOfLegendsLeagueApi
    public clash: LeagueOfLegendsClashApi
    public match: LeagueOfLegendsMatchApi

    constructor(options: LeagueOfLegendsAPIOptions) {
        const fetcher = new Fetcher(options, this.url)

        this.status = new LeagueOfLegendsPlatformStatusApi(fetcher)
        this.spectator = new LeagueOfLegendsSpectatorApi(fetcher)
        this.leagueExp = new LeagueOfLegendsLeagueExpApi(fetcher)
        this.champion = new LeagueOfLegendsChampionApi(fetcher)
        this.summoner = new LeagueOfLegendsSummonerApi(fetcher)
        this.league = new LeagueOfLegendsLeagueApi(fetcher)
        this.clash = new LeagueOfLegendsClashApi(fetcher)
        this.match = new LeagueOfLegendsMatchApi(fetcher)
    }
}

export {
    LeagueOfLegendsGameMode,
    LeagueOfLegendsBaseRank,
    LeagueOfLegendsHighRank,
    LeagueOfLegendsRank,
} from '@api/types'

export { LeagueOfLegendsClashPlayerRole, LeagueOfLegendsClashPlayerPosition } from '@api/CLASH-V1/types'
export { LeagueOfLegendsMatchQueue } from '@api/MATCH-V5/types'
export { RiotGamesDataRegion } from '@types'

export default LeagueOfLegendsAPI
