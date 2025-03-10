import Conditions from '../../../../../resources/conditions';
import { Responses } from '../../../../../resources/responses';
import ZoneId from '../../../../../resources/zone_id';
import { RaidbossData } from '../../../../../types/data';
import { TriggerSet } from '../../../../../types/trigger';

export type Data = RaidbossData;

const triggerSet: TriggerSet<Data> = {
  zoneId: ZoneId.AnamnesisAnyder,
  timelineFile: 'anamnesis_anyder.txt',
  triggers: [
    {
      id: 'AnAnyder Fetid Fang',
      type: 'StartsUsing',
      netRegex: { source: 'Unknown', id: ['4B69', '4B72'] },
      response: Responses.tankBuster(),
    },
    {
      id: 'AnAnyder Scrutiny',
      type: 'StartsUsing',
      netRegex: { source: 'Unknown', id: '4E25', capture: false },
      delaySeconds: 3,
      durationSeconds: 7,
      infoText: (_data, _matches, output) => output.text!(),
      outputStrings: {
        text: {
          en: 'Avoid Arrow',
          de: 'Pfeil ausweichen',
          fr: 'Évitez la flèche',
          ja: '矢印を避ける',
          cn: '躲箭头',
          ko: '화살표 피하기',
        },
      },
    },
    {
      id: 'AnAnyder Inscrutability',
      type: 'StartsUsing',
      netRegex: { source: 'Unknown', id: '4B6A', capture: false },
      response: Responses.aoe(),
    },
    {
      id: 'AnAnyder Luminous Ray',
      type: 'StartsUsing',
      netRegex: { source: 'Unknown', id: '4E2[67]', capture: false },
      response: Responses.awayFromFront(),
    },
    {
      id: 'AnAnyder The Final Verse',
      type: 'StartsUsing',
      netRegex: { source: 'Kyklops', id: '4B58', capture: false },
      response: Responses.aoe(),
    },
    {
      id: 'AnAnyder 2,000-Mina Swing',
      type: 'StartsUsing',
      netRegex: { source: 'Kyklops', id: '4B55', capture: false },
      response: Responses.getOut(),
    },
    {
      id: 'AnAnyder Eye Of The Cyclone',
      type: 'StartsUsing',
      netRegex: { source: 'Kyklops', id: '4B57', capture: false },
      response: Responses.getIn(),
    },
    {
      id: 'AnAnyder 2,000-Mina Swipe',
      type: 'StartsUsing',
      netRegex: { source: 'Kyklops', id: '4B54', capture: false },
      response: Responses.awayFromFront(),
    },
    {
      id: 'AnAnyder Raging Glower',
      type: 'StartsUsing',
      netRegex: { source: 'Kyklops', id: '4B56', capture: false },
      response: Responses.awayFromFront(),
    },
    {
      id: 'AnAnyder Open Hearth Flying Fount',
      type: 'HeadMarker',
      netRegex: { id: '003E' },
      response: Responses.stackMarkerOn(),
    },
    {
      id: 'AnAnyder Bonebreaker',
      type: 'StartsUsing',
      netRegex: { source: 'Rukshs Dheem', id: '4B8C' },
      response: Responses.tankBuster(),
    },
    {
      id: 'AnAnyder Falling Water',
      type: 'StartsUsing',
      netRegex: { source: 'Rukshs Dheem', id: '4B7E' },
      condition: Conditions.targetIsYou(),
      response: Responses.spread(),
    },
    {
      id: 'AnAnyder Depth Grip',
      type: 'StartsUsing',
      netRegex: { source: 'Rukshs Dheem', id: '4B84', capture: false },
      infoText: (_data, _matches, output) => output.text!(),
      outputStrings: {
        text: {
          en: 'Avoid Hands',
          de: 'Händen ausweichen',
          fr: 'Évitez les mains',
          ja: '手を避ける',
          cn: '躲手',
          ko: '손 피하기',
        },
      },
    },
  ],
  timelineReplace: [
    {
      'locale': 'de',
      'replaceSync': {
        'Sinister Bubble': 'Finster(?:e|er|es|en) Blase',
        'Rukshs Dheem': 'Rukshs Dheem',
        'Unknown': 'Abscheulich(?:e|er|es|en) Monstrum',
        'Kyklops': 'Kyklops',
        'Depth Grip': 'Hand des Ozeans',
        'Katharsis': 'Platz der Katharsis',
        'Doxa': 'Platz der Doxa',
        'Noesis': 'Noesis',
      },
      'replaceText': {
        'The Final Verse': 'Schreckensvers',
        'Wavebreaker': 'Wellenbrecher',
        'Terrible Hammer/Blade': 'Schreckenshammer/klinge',
        'Terrible Blade/Hammer': 'Schreckensklinge/Hammer',
        'Swift Shift': 'Schneller Wechsel',
        'Setback': 'Rücksetzer',
        'Seabed Ceremony': 'Riffsturmzeremonie',
        'Scrutiny': 'Überwachung',
        'Rising Tide': 'Steigende Flut',
        'Raging Glower': 'Wütender Blick',
        'Plain Weirdness': 'Unbekanntes Prinzip',
        'Luminous Ray': 'Lumineszenzstrahl',
        'Inscrutability': 'Unidentifizierbar',
        'Flying Fount': 'Spritzige Fontäne',
        'Fetid Fang': 'Kontaminierte Klaue',
        'Falling Water': 'Fallendes Wasser',
        'Explosion': 'Explosion',
        'Ectoplasmic Ray': 'Ektoplasmastrahl',
        'Depth Grip': 'Hand des Ozeans',
        'Command Current': 'Flutenruf',
        'Clearout': 'Kreisfeger',
        'Bonebreaker': 'Knochenbrecher',
        'Swing/Swipe/Cyclone': 'Hiebe/Schwung/Zyklons',
        'Hammer/Blade Mark': 'Hammer/Klingenmarkierung',
        'Blade/Hammer Mark': 'Klinge/Hammermarkierung',
        'Pyre/Hearth': 'Schreckensstachel/flammen',
        'Unknown Add': 'Unbekanntes Add',
      },
    },
    {
      'locale': 'fr',
      'replaceSync': {
        'Depth Grip': 'Emprise Des Profondeurs',
        'Doxa': 'la Doxa',
        'Katharsis': 'la Catharsis',
        'Kyklops': 'Kyklops',
        'Noesis': 'la Noesis',
        'Sinister Bubble': 'Bulle sinistre',
        'Rukshs Dheem': 'Rukshs Dheem',
        'Unknown': 'Inconnu',
      },
      'replaceText': {
        'The Final Verse': 'Le chapitre final',
        'Wavebreaker': 'Brise-vague',
        'Unknown Add': 'Add Inconnu',
        'Terrible Hammer/Blade': 'Marteau/Lame terrifiante',
        'Terrible Blade/Hammer': 'Lame/Marteau terrifiant',
        'Swing/Swipe/Cyclone': 'Swing/Fauche/Cyclone',
        'Swift Shift': 'Déplacement soudain',
        'Setback': 'Revers',
        'Seabed Ceremony': 'Cérémonie abyssale',
        'Scrutiny': 'Observation',
        'Rising Tide': 'Marée montante',
        'Raging Glower': 'Regard enragé',
        'Pyre/Hearth': 'Explosion/Flamme',
        'Plain Weirdness': 'Principe inconnu',
        'Luminous Ray': 'Rayon lumineux',
        'Inscrutability': 'Signification inconnue',
        'Hammer/Blade Mark': 'Marque Marteau/Lame',
        'Flying Fount': 'Cascade',
        'Fetid Fang': 'Croc contaminé',
        'Falling Water': 'Chute d\'eau',
        'Explosion': 'Explosion',
        'Ectoplasmic Ray': 'Rayon ectoplasmique',
        'Depth Grip': 'Emprise des profondeurs',
        'Command Current': 'Eau courante',
        'Clearout': 'Fauchage',
        'Bonebreaker': 'Brise-os',
        'Blade/Hammer Mark': 'Marque Lame/Marteau',
      },
    },
    {
      'locale': 'ja',
      'replaceSync': {
        'Depth Grip': 'ハンド・オブ・オーシャン',
        'Doxa': 'ドクサの広間',
        'Katharsis': 'カタルシスの広場',
        'Kyklops': 'クリュプス',
        'Noesis': 'ノエシスの間',
        'Rukshs Dheem': 'ルクスィー・ディーマ',
        'Sinister Bubble': '不気味な泡',
        'Unknown': '正体不明',
      },
      'replaceText': {
        'The Final Verse': '恐怖の最終章',
        'Wavebreaker': 'ウェーブブレイク',
        'Unknown Add': '雑魚：正体不明',
        'Terrible Hammer/Blade': '恐怖の戦鎚／恐怖の大剣',
        'Terrible Blade/Hammer': '恐怖の大剣／恐怖の戦鎚',
        'Swing/Swipe/Cyclone': 'スウィング／スワイプ／サイクロン',
        'Swift Shift': '高速移動',
        'Setback': '打ち払い',
        'Seabed Ceremony': '水底の儀式',
        'Scrutiny': '観察',
        'Rising Tide': '上げ潮',
        'Raging Glower': 'レイジング・グラワー',
        'Pyre/Hearth': '恐怖の爆炎／恐怖の火焔',
        'Plain Weirdness': '原理不明',
        'Luminous Ray': 'ルミナスレイ',
        'Inscrutability': '意味不明',
        'Hammer/Blade Mark': 'マーク：戦鎚／大剣',
        'Flying Fount': '飛泉',
        'Fetid Fang': '不快な牙',
        'Falling Water': '落水',
        'Explosion': '爆散',
        'Ectoplasmic Ray': 'エクトプラズミックレイ',
        'Depth Grip': 'ハンド・オブ・オーシャン',
        'Command Current': '流水',
        'Clearout': 'なぎ払い',
        'Bonebreaker': '骨砕き',
        'Blade/Hammer Mark': 'マーク：大剣／戦鎚',
      },
    },
    {
      'locale': 'cn',
      'replaceSync': {
        'Depth Grip': '海洋之手',
        'Doxa': '信仰大堂',
        'Katharsis': '净化广场',
        'Kyklops': '克琉普斯',
        'Noesis': '概念之间',
        'Rukshs Dheem': '鲁克嘶·蒂母',
        'Sinister Bubble': '怪异泡沫',
        'Unknown': '不明物体',
      },
      'replaceText': {
        'The Final Verse': '恐怖的最终章',
        'Wavebreaker': '水波破',
        'Terrible Hammer/Blade': '恐怖的战锤/恐怖的大剑',
        'Terrible Blade/Hammer': '恐怖的大剑/恐怖的战锤',
        'Swift Shift': '高速移动',
        'Setback': '驱赶',
        'Seabed Ceremony': '水底仪式',
        'Scrutiny': '观察',
        'Rising Tide': '涨潮',
        'Raging Glower': '暴怒注视',
        'Plain Weirdness': '原理不明',
        'Luminous Ray': '光流射线',
        'Inscrutability': '意义不明',
        'Flying Fount': '飞泉',
        'Fetid Fang': '恶臭尖牙',
        'Falling Water': '落水',
        'Explosion': '爆炸',
        'Ectoplasmic Ray': '外质射线',
        'Depth Grip': '海洋之手',
        'Command Current': '流水',
        'Clearout': '横扫',
        'Bonebreaker': '碎骨',
        'Swing/Swipe/Cyclone': '钢铁/横扫/月环',
        'Hammer/Blade Mark': '战锤/大剑标记',
        'Blade/Hammer Mark': '大剑/战锤标记',
        'Pyre/Hearth': '分散/分摊',
        'Unknown Add': '小怪出现',
      },
    },
    {
      'locale': 'ko',
      'replaceSync': {
        'Depth Grip': '바다의 손',
        'Doxa': '도크사의 방',
        'Katharsis': '카타르시스 광장',
        'Kyklops': '키클롭스',
        'Noesis': '노에시스의 방',
        'Rukshs Dheem': '루크쉬 디마',
        'Sinister Bubble': '불길한 거품',
        'Unknown': '정체불명',
      },
      'replaceText': {
        'The Final Verse': '공포의 최종장',
        'Wavebreaker': '방파제',
        'Terrible Hammer/Blade': '공포의 망치/대검',
        'Terrible Blade/Hammer': '공포의 대검/망치',
        'Swift Shift': '고속 이동',
        'Setback': '후리기',
        'Seabed Ceremony': '해저 의식',
        'Scrutiny': '관찰',
        'Rising Tide': '밀물',
        'Raging Glower': '성난 노려보기',
        'Plain Weirdness': '원리불명',
        'Luminous Ray': '눈부신 광선',
        'Inscrutability': '의미불명',
        'Flying Fount': '샘솟는 물',
        'Fetid Fang': '불쾌한 송곳니',
        'Falling Water': '낙수',
        'Explosion': '폭산',
        'Ectoplasmic Ray': '심령 광선',
        'Depth Grip': '바다손',
        'Command Current': '유수',
        'Clearout': '휩쓸기',
        'Bonebreaker': '뼈 부수기',
        'Swing/Swipe/Cyclone': '휘두르기/후려치기/사이클론의 눈',
        'Hammer/Blade Mark': '망치/대검 징',
        'Blade/Hammer Mark': '대검/망치 징',
        'Pyre/Hearth': '공포의 폭염/화염',
        'Unknown Add': '정체불명 추가',
      },
    },
  ],
};

export default triggerSet;
