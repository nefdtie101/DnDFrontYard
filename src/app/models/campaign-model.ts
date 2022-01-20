export class Campaign{
  public CampaignName?:string;
  public DungeonMasterID?:number;
  public PlayerIDs?:string;
  public Intro?:string;
  public CurrentWheatherTime?:string;
  public NPCTable?:number;
  public MonsterTable?:number;
  constructor() {
    this.CampaignName ="";
    this.DungeonMasterID =0;
    this.PlayerIDs ="";
    this.Intro="";
    this.CurrentWheatherTime="";
    this.NPCTable=0;
    this.MonsterTable=0;
  }
}
