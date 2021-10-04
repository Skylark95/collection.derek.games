function global:ExportGameTable()
{
    $path = $PlayniteApi.Dialogs.SaveFile("JSON|*.json")
    if ($path)
    {
		$Library = @{label="Library";expression={$_.Source.Name}}
		$ReleaseYear = @{label="ReleaseYear";expression={$_.ReleaseDate.Year}}
        $PlayniteApi.Database.Games | Select Name, $Library, $ReleaseYear | ConvertTo-Json | Out-File $path -Encoding utf8
        $PlayniteApi.Dialogs.ShowMessage("Game Table exported successfully.");
    }
}

function global:GetMainMenuItems()
{
    param(
        $menuArgs
    )

    $menuItem = New-Object Playnite.SDK.Plugins.ScriptMainMenuItem
    $menuItem.Description = "Export Game Table"
    $menuItem.FunctionName = "ExportGameTable"
    $menuItem.MenuSection = "@"
    return $menuItem
}