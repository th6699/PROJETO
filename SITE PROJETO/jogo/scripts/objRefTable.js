const C3 = self.C3;
self.C3_GetObjectRefTable = function () {
	return [
		C3.Plugins.TiledBg,
		C3.Behaviors.Anchor,
		C3.Plugins.Sprite,
		C3.Behaviors.Platform,
		C3.Behaviors.solid,
		C3.Behaviors.Flash,
		C3.Behaviors.scrollto,
		C3.Plugins.Keyboard,
		C3.Plugins.Mouse,
		C3.Plugins.Audio,
		C3.Plugins.Spritefont2,
		C3.Plugins.Text,
		C3.Plugins.System.Cnds.CompareVar,
		C3.Plugins.System.Acts.GoToLayout,
		C3.Plugins.System.Acts.ResetEventVar,
		C3.Plugins.System.Cnds.EveryTick,
		C3.Plugins.Sprite.Acts.SetAnim,
		C3.Plugins.System.Cnds.IsGroupActive,
		C3.Plugins.Keyboard.Cnds.OnKey,
		C3.Behaviors.Platform.Acts.SimulateControl,
		C3.Plugins.Keyboard.Cnds.IsKeyDown,
		C3.Plugins.Sprite.Acts.SetMirrored,
		C3.Plugins.Mouse.Cnds.OnClick,
		C3.Plugins.Sprite.Cnds.IsAnimPlaying,
		C3.Plugins.System.Acts.Wait,
		C3.Behaviors.Platform.Cnds.IsMoving,
		C3.Behaviors.Platform.Cnds.IsJumping,
		C3.Plugins.Sprite.Cnds.OnCollision,
		C3.Behaviors.Flash.Acts.Flash,
		C3.Behaviors.Platform.Acts.SetEnabled,
		C3.Plugins.Sprite.Cnds.OnAnimFinished,
		C3.Behaviors.solid.Acts.SetEnabled,
		C3.Plugins.Sprite.Acts.Destroy,
		C3.Plugins.Sprite.Cnds.CompareInstanceVar,
		C3.Plugins.Sprite.Acts.SetInstanceVar,
		C3.Plugins.System.Acts.SubVar,
		C3.Plugins.Sprite.Cnds.IsBoolInstanceVarSet,
		C3.Plugins.System.Cnds.OnLayoutStart,
		C3.Plugins.Audio.Acts.StopAll,
		C3.Plugins.Sprite.Acts.SetVisible,
		C3.Plugins.Spritefont2.Acts.SetVisible,
		C3.Plugins.Spritefont2.Acts.SetText,
		C3.Plugins.Sprite.Acts.SetBoolInstanceVar,
		C3.Plugins.Mouse.Cnds.OnObjectClicked,
		C3.Plugins.Audio.Acts.Play,
		C3.Plugins.Audio.Acts.Stop
	];
};
self.C3_JsPropNameTable = [
	{Âncora: 0},
	{planodeFundo: 0},
	{Sprite: 0},
	{Sprite2: 0},
	{Sprite3: 0},
	{Sprite4: 0},
	{Sprite5: 0},
	{Sprite6: 0},
	{Sprite7: 0},
	{Sprite8: 0},
	{Sprite9: 0},
	{Sprite10: 0},
	{Sprite11: 0},
	{Sprite12: 0},
	{Sprite13: 0},
	{Sprite14: 0},
	{Sprite15: 0},
	{Sprite16: 0},
	{direcao: 0},
	{direcao2: 0},
	{Plataforma: 0},
	{Sólido: 0},
	{Piscar: 0},
	{Sprite17: 0},
	{chave: 0},
	{CentrarEm: 0},
	{Sprite18: 0},
	{sensorDeImpacto: 0},
	{objeto1: 0},
	{objeto2: 0},
	{objeto3: 0},
	{Sprite19: 0},
	{Sprite20: 0},
	{Sprite21: 0},
	{Sprite22: 0},
	{Sprite23: 0},
	{Sprite24: 0},
	{Teclado: 0},
	{Mouse: 0},
	{Áudio: 0},
	{fase2sensor: 0},
	{SENSORFINALGAME: 0},
	{PlanoDeFundoEmBlocos: 0},
	{PLAY: 0},
	{PlanoDeFundoEmBlocos2: 0},
	{RETRY: 0},
	{black: 0},
	{jogadorDialogo: 0},
	{FonteDeSprites: 0},
	{PlanoDeFundoEmBlocos3: 0},
	{HISTORIA: 0},
	{Texto: 0},
	{PlanoDeFundoEmBlocos4: 0},
	{Texto2: 0},
	{Texto3: 0},
	{Sprite25: 0},
	{PlanoDeFundoEmBlocos5: 0},
	{Texto4: 0},
	{sonsordialogo2: 0},
	{Sprite26: 0},
	{Sprite27: 0},
	{FonteDeSprites2: 0},
	{Sprite28: 0},
	{vidas: 0}
];

self.InstanceType = {
	planodeFundo: class extends self.ITiledBackgroundInstance {},
	Sprite: class extends self.ISpriteInstance {},
	Sprite2: class extends self.ISpriteInstance {},
	Sprite3: class extends self.ISpriteInstance {},
	Sprite4: class extends self.ISpriteInstance {},
	Sprite5: class extends self.ISpriteInstance {},
	Sprite6: class extends self.ISpriteInstance {},
	Sprite7: class extends self.ISpriteInstance {},
	Sprite8: class extends self.ISpriteInstance {},
	Sprite9: class extends self.ISpriteInstance {},
	Sprite10: class extends self.ISpriteInstance {},
	Sprite11: class extends self.ISpriteInstance {},
	Sprite12: class extends self.ISpriteInstance {},
	Sprite13: class extends self.ISpriteInstance {},
	Sprite14: class extends self.ISpriteInstance {},
	Sprite15: class extends self.ISpriteInstance {},
	Sprite16: class extends self.ISpriteInstance {},
	Sprite17: class extends self.ISpriteInstance {},
	Sprite18: class extends self.ISpriteInstance {},
	sensorDeImpacto: class extends self.ISpriteInstance {},
	objeto1: class extends self.ISpriteInstance {},
	objeto2: class extends self.ISpriteInstance {},
	objeto3: class extends self.ISpriteInstance {},
	Sprite19: class extends self.ISpriteInstance {},
	Sprite20: class extends self.ISpriteInstance {},
	Sprite21: class extends self.ISpriteInstance {},
	Sprite22: class extends self.ISpriteInstance {},
	Sprite23: class extends self.ISpriteInstance {},
	Sprite24: class extends self.ISpriteInstance {},
	Teclado: class extends self.IInstance {},
	Mouse: class extends self.IInstance {},
	Áudio: class extends self.IInstance {},
	fase2sensor: class extends self.ISpriteInstance {},
	SENSORFINALGAME: class extends self.ISpriteInstance {},
	PlanoDeFundoEmBlocos: class extends self.ITiledBackgroundInstance {},
	PLAY: class extends self.ISpriteInstance {},
	PlanoDeFundoEmBlocos2: class extends self.ITiledBackgroundInstance {},
	RETRY: class extends self.ISpriteInstance {},
	black: class extends self.ISpriteInstance {},
	jogadorDialogo: class extends self.ISpriteInstance {},
	FonteDeSprites: class extends self.ISpriteFontInstance {},
	chave: class extends self.ISpriteInstance {},
	PlanoDeFundoEmBlocos3: class extends self.ITiledBackgroundInstance {},
	HISTORIA: class extends self.ITextInstance {},
	Texto: class extends self.ITextInstance {},
	PlanoDeFundoEmBlocos4: class extends self.ITiledBackgroundInstance {},
	Texto2: class extends self.ITextInstance {},
	Texto3: class extends self.ITextInstance {},
	Sprite25: class extends self.ISpriteInstance {},
	PlanoDeFundoEmBlocos5: class extends self.ITiledBackgroundInstance {},
	Texto4: class extends self.ITextInstance {},
	sonsordialogo2: class extends self.ISpriteInstance {},
	Sprite26: class extends self.ISpriteInstance {},
	Sprite27: class extends self.ISpriteInstance {},
	FonteDeSprites2: class extends self.ISpriteFontInstance {},
	Sprite28: class extends self.ISpriteInstance {}
}