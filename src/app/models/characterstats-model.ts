export class CharacterStats{
  public CharacterName?:string;
  public Class?:string;
  public CurrentLevel?:number;
  public Experience?:number;
  public ProfBonus?:number;
  public Inspiration?:number;
  public Armor?:number;
  public Speed?:number;
  public Initiative?:number;
  public PassivePerception?:number;
  public TempHp?:number;
  public Hp?:number;
  public SpellSkills?:string;
  public EquipmentIDs?:string;
  constructor() {
    this.CharacterName="";
    this.Class="";
    this.CurrentLevel=0;
    this.Experience=0;
    this.ProfBonus=0;
    this.Inspiration=0;
    this.Armor=0;
    this.Speed=0;
    this.Initiative=0;
    this.PassivePerception=0;
    this.TempHp=0;
    this.Hp=0;
    this.SpellSkills="";
    this.EquipmentIDs="";
  }
}
