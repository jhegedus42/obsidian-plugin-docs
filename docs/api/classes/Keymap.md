# Keymap

## Constructor

```ts
constructor();
```

## Methods

### isModifier

```ts
static isModifier(evt: MouseEvent | TouchEvent | KeyboardEvent, modifier: Modifier): boolean;
```

Checks whether the modifier key is pressed during this event

### isModEvent

```ts
static isModEvent(evt?: UserEvent | null): boolean;
```

Returns true if the modifier key Cmd/Ctrl is pressed OR if this is a middle-click MouseEvent.
