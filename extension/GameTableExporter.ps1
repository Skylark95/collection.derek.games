function global:ExportGameTable()
{
    $path = $PlayniteApi.Dialogs.SaveFile("JSON|*.json")
    if ($path)
    {
		$Library = @{label="Library";expression={$_.Source.Name}}
		$ReleaseYear = @{label="ReleaseYear";expression={$_.ReleaseDate.Year}}
		$Developer = @{label="Developer";expression={$_.Developers[0].Name}}
		$Publisher = @{label="Publisher";expression={$_.Publishers[0].Name}}
        $PlayniteApi.Database.Games | Select-Object -Property Name, $Library, $ReleaseYear, $Developer, $Publisher | ConvertTo-Json | Out-File $path -Encoding utf8
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