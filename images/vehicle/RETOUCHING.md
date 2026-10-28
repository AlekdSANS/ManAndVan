# Vehicle photo retouching

Created with the built-in image-generation editing tool on 2026-10-28. The original files are retained unchanged. Website exports use `jumper-<view>-retouched.jpg` and `jumper-<view>-retouched-small.jpg`.

## Saved website assets

All files below are in `images/vehicle/`.

| View | Full photograph | Thumbnail |
| --- | --- | --- |
| Front / hero | `jumper-front-retouched.jpg` | `jumper-front-retouched-small.jpg` |
| Loading lift | `jumper-lift-retouched.jpg` | `jumper-lift-retouched-small.jpg` |
| Cargo compartment | `jumper-cargo-retouched.jpg` | `jumper-cargo-retouched-small.jpg` |
| Side door | `jumper-side-retouched.jpg` | `jumper-side-retouched-small.jpg` |
| Rear | `jumper-rear-retouched.jpg` | `jumper-rear-retouched-small.jpg` |
| City | `jumper-city-retouched.jpg` | `jumper-city-retouched-small.jpg` |

The edits remove visible superficial grime and pale adhesive residue, and improve perceived clarity. AI enhancement reconstructs detail; the exported full images are 1448 × 1086 pixels (1086 × 1448 for cargo), not native 4K photographs. Thumbnails are 960 × 720 pixels (720 × 960 for cargo). Full JPEG exports use quality 94; thumbnails use quality 90.

## Shared editing prompt

Use case: precise-object-edit. Asset type: authentic vehicle photograph for a small moving-company website. This is a conservative retouch of the supplied photograph, NOT a new scene. Remove only superficial dirt, stains, pale adhesive residue/ghost lettering and greasy streaks on the white cargo box, cab and lower body. Improve perceived clarity, mild JPEG artifacts and natural tonal detail, with restrained noise reduction and realistic sharpening. Preserve the exact same vehicle, model, proportions, dents, panel seams, rivets, doors, wheel positions, mirrors, lift equipment, reflections, camera viewpoint, framing, background, other cars, buildings and existing text/number plates. Preserve realistic white paint texture and daylight; do not make a new or glossy showroom truck. Do not add or remove equipment or change body construction. Do not add logos, objects, text or watermarks. Return one complete photograph, no collage, no borders, no before/after comparison. Keep the original 4:3 landscape composition and output a high-resolution image, ideally 2560x1920 or larger, for full-screen display.

## Per-photo prompt additions

### front

Source: `images/vehicle/jumper-front.jpg`

Edit target: the three-quarter front/side view with autumn trees, fence and the lowered lift extending left behind the truck. Clean the faint horizontal residue on the white box panels, lower cab/sill dirt and dirty marks on the roof fairing. Retain the exact same scene and framing.

### city

Source: `images/truck_photo2.jpg`

Edit target: the three-quarter front/side view parked beside the blue accessible parking bay with red KFC flags in the background. The large irregular pale ghost lettering/adhesive patches across the cargo-box side are the main stains to remove. Retain real environmental reflections, the parking markings, all background signage and exact composition. This input already has high native resolution: preserve its detail and original 4:3 aspect ratio.

### lift

Source: `images/vehicle/jumper-lift.jpg`

Edit target: three-quarter rear view with cargo opening and extended horizontal lift platform. Remove the broad pale adhesive-residue patches and dirt streaks on the exterior white left wall, and only superficial dirty patches on exterior trim. Preserve the scuffed working cargo floor, the lift's metal texture, blue BAR marks, wooden battens, all straps, all hinges and the actual loading equipment exactly. Preserve registration text LU839MA verbatim. Requested output 2560x1920 pixels, original 4:3 composition.

### side

Source: `images/vehicle/jumper-side.jpg`

Edit target: full side view with open side loading door and lowered rear lift. Remove pale adhesive residue and streaks on the white exterior panels and superficial lower cab grime. The open door's inner face is unfinished dull grey metal: retain its grey finish, the tall dark rectangular pad and real scuffs; do not repaint or replace it. Preserve the pallet, wooden rails, opening sizes and all exact vehicle geometry. Requested output 2560x1920 pixels, original 4:3 composition.

### rear

Source: `images/vehicle/jumper-rear.jpg`

Edit target: closed cargo-box view from rear left, with folded upright silver lift panel. Remove pale patchy adhesive stains on the white left side and dirty water streaks on the folded lift, preserving metal texture, rivets, lines, existing dents and the two red-white safety markers. Preserve tiny blue BAR marks and registration LU839MA verbatim. Keep the same overcast lighting and exact background. Requested output 2560x1920 pixels, original 4:3 composition.

### cargo

Source: `images/vehicle/jumper-cargo.jpg`

This input is PORTRAIT 3:4, overriding the generic landscape instruction. Edit target: straight rear view into the open cargo bay, with lowered lift platform reaching foreground. Keep framing exactly. This photo has little exterior staining, so primarily improve clarity and subtle tonal balance, with only minor grime cleanup on white exterior frame. Preserve all wood, pallet, cargo floor wear, platform metal texture, blue BAR logo, the black car on the road and registration LU839MA verbatim. Do not redesign or clean away legitimate working surfaces. Output one 3:4 portrait photograph, requested resolution 1920x2560 pixels.

